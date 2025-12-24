import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { LoginSchema } from '@businessdirectory/database';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

interface LoginResponse {
  user: {
    id: number;
    email: string;
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    role: string;
    createdAt: string;
    updatedAt: string;
  };
  token: string;
}

/**
 * Extended user type for NextAuth with custom fields
 */
interface ExtendedUser {
  id: string;
  email: string;
  name: string;
  role: string;
  token: string;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true, // Required for NextAuth v5 in development
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const email = credentials?.email;
          const password = credentials?.password;

          if (!email) {
            return null;
          }

          // Check if this is an OAuth token-based login
          if (
            password &&
            typeof password === 'string' &&
            password.startsWith('__OAUTH_TOKEN__')
          ) {
            const token = password.replace('__OAUTH_TOKEN__', '');

            // Verify token with backend to get user info
            const decoded = JSON.parse(
              Buffer.from(token.split('.')[1], 'base64').toString()
            );

            const response = await fetch(`${baseUrl}/users/${decoded.id}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
            });

            if (!response.ok) {
              return null;
            }

            const result = await response.json();

            if (!result.success || !result.data) {
              return null;
            }

            const user = result.data;

            // Return user object that will be stored in session
            return {
              id: user.id.toString(),
              email: user.email,
              name: user.firstName
                ? `${user.firstName} ${user.lastName || ''}`.trim()
                : user.email,
              role: user.role,
              token: token, // Store token for API calls
            };
          }

          // Regular credentials login
          const validatedCredentials = LoginSchema.parse({
            email,
            password,
          });

          // Call your API to authenticate
          const response = await fetch(`${baseUrl}/users/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(validatedCredentials),
          });

          const result: ApiResponse<LoginResponse> = await response.json();

          if (!response.ok || !result.success || !result.data) {
            return null;
          }

          // Return user object that will be stored in session
          return {
            id: result.data.user.id.toString(),
            email: result.data.user.email,
            name: result.data.user.firstName
              ? `${result.data.user.firstName} ${
                  result.data.user.lastName || ''
                }`.trim()
              : result.data.user.email,
            role: result.data.user.role,
            token: result.data.token, // Store token for API calls
          };
        } catch (error) {
          console.error('Auth error:', error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  },
  callbacks: {
    async jwt({ token, user }) {
      // Initial sign in
      if (user) {
        const extendedUser = user as ExtendedUser;
        token.id = extendedUser.id;
        token.role = extendedUser.role;
        token.accessToken = extendedUser.token;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.accessToken = token.accessToken as string;
      }
      return session;
    },
  },
  pages: {
    signIn: '/signin',
    signOut: '/signin',
  },
  secret: process.env.AUTH_SECRET,
  debug: process.env.NODE_ENV === 'development', // Enable debug in development
});
