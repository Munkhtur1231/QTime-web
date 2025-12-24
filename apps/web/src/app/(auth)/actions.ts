'use server';

import { CreateUserSchema, LoginSchema } from '@businessdirectory/database';
import { ZodError } from 'zod';
import { signIn, signOut } from '../../auth';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

interface RegisterResponse {
  id: number;
  email: string;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export async function registerAction(
  formData: unknown
): Promise<{ success: boolean; error?: string }> {
  try {
    // Validate with zod
    const validatedData = CreateUserSchema.omit({ role: true }).parse(formData);

    const response = await fetch(`${baseUrl}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validatedData),
    });

    const result: ApiResponse<RegisterResponse> = await response.json();

    if (!response.ok || !result.success) {
      return {
        success: false,
        error: result.message || result.error || 'Registration failed',
      };
    }

    return { success: true };
  } catch (error) {
    if (error instanceof ZodError) {
      const firstError = error.issues[0];
      return {
        success: false,
        error: firstError?.message || 'Validation failed',
      };
    }
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: 'An unexpected error occurred' };
  }
}

export async function loginAction(
  formData: unknown
): Promise<{ success: boolean; error?: string; redirectTo?: string }> {
  try {
    // Validate with zod
    const validatedData = LoginSchema.parse(formData);

    // Peek role and business admin status from API to choose redirect
    // Default to user dashboard
    let redirectTo = '/user/dashboard';
    try {
      const peek = await fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validatedData),
      });
      if (peek.ok) {
        const result: ApiResponse<{
          user: { id: number; role: string };
          token: string;
        }> = await peek.json();
        const role = result?.data?.user?.role;
        const userId = result?.data?.user?.id;
        const token = result?.data?.token;

        // Check if user is ADMIN or SUPERADMIN
        if (role === 'ADMIN' || role === 'SUPERADMIN') {
          redirectTo = '/dashboard';
        }
        // Check if user is business admin
        else if (userId && token) {
          try {
            const businessRes = await fetch(`${baseUrl}/businesses?limit=1`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            if (businessRes.ok) {
              const businessData = await businessRes.json();
              // If user has businesses, they're a business admin
              if (businessData?.data && businessData.data.length > 0) {
                redirectTo = '/business-dashboard';
              }
            }
          } catch {
            // If check fails, use default redirect
          }
        }
      }
    } catch {
      // if peek fails, fall back to default redirect
    }

    // Use NextAuth signIn with credentials
    const result = await signIn('credentials', {
      email: validatedData.email,
      password: validatedData.password,
      redirect: false,
    });

    if (result?.error) {
      return {
        success: false,
        error: 'Invalid email or password',
      };
    }

    return { success: true, redirectTo };
  } catch (error) {
    if (error instanceof ZodError) {
      const firstError = error.issues[0];
      return {
        success: false,
        error: firstError?.message || 'Validation failed',
      };
    }
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: 'An unexpected error occurred' };
  }
}

export async function logoutAction(): Promise<void> {
  await signOut({ redirectTo: '/signin' });
}

export async function githubSignInAction(): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    const result = await signIn('github', {
      redirect: false,
    });

    if (result?.error) {
      return {
        success: false,
        error: 'GitHub authentication failed',
      };
    }

    return { success: true };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: 'An unexpected error occurred' };
  }
}
