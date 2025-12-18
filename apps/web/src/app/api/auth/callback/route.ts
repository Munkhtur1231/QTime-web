import { NextRequest, NextResponse } from 'next/server';
import { signIn } from '../../../../auth';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

interface JwtPayload {
  id: string;
  email?: string;
  role?: string;
  iat?: number;
  exp?: number;
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const token = searchParams.get('token');

    if (!token) {
      return NextResponse.redirect(
        new URL('/signin?error=missing_token', request.url)
      );
    }

    // Decode JWT token to get user info (just the payload, not verified)
    // We'll verify with backend
    let userId: string | null = null;
    try {
      const payload = token.split('.')[1];
      const decoded = JSON.parse(
        Buffer.from(payload, 'base64').toString()
      ) as JwtPayload;
      userId = decoded.id;
    } catch {
      return NextResponse.redirect(
        new URL('/signin?error=invalid_token', request.url)
      );
    }

    if (!userId) {
      return NextResponse.redirect(
        new URL('/signin?error=invalid_token', request.url)
      );
    }

    // Verify token with backend to get full user info
    const response = await fetch(`${baseUrl}/users/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      return NextResponse.redirect(
        new URL('/signin?error=token_verification_failed', request.url)
      );
    }

    const result = await response.json();

    if (!result.success || !result.data) {
      return NextResponse.redirect(
        new URL('/signin?error=user_not_found', request.url)
      );
    }

    const user = result.data;

    // Create NextAuth session using signIn with token-based credentials
    // We'll pass the token as a special credential that authorize will recognize
    const signInResult = await signIn('credentials', {
      email: user.email,
      password: `__OAUTH_TOKEN__${token}`, // Special marker for OAuth token
      redirect: false,
    });

    if (signInResult?.error) {
      return NextResponse.redirect(
        new URL('/signin?error=session_creation_failed', request.url)
      );
    }

    // Redirect to home page on success
    return NextResponse.redirect(new URL('/', request.url));
  } catch (error) {
    console.error('OAuth callback error:', error);
    return NextResponse.redirect(
      new URL('/signin?error=callback_failed', request.url)
    );
  }
}
