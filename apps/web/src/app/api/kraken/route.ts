import { auth } from '../../../auth';
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

export async function POST(request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json(
        { success: false, error: 'Not authenticated' },
        { status: 401 }
      );
    }

    const token = await getToken({
      req: request,
      secret: process.env.AUTH_SECRET,
    });

    if (!token?.accessToken) {
      return NextResponse.json(
        { success: false, error: 'No access token found' },
        { status: 401 }
      );
    }

    // Make the API call to the backend
    const response = await fetch(`${baseUrl}/health/testSuperadmin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.accessToken}`,
      },
    });

    const result: ApiResponse<Record<string, unknown>> = await response.json();

    if (!response.ok || !result.success) {
      return NextResponse.json(
        {
          success: false,
          error:
            result.message || result.error || 'Failed to release the kraken',
        },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      data: result.data,
      message: result.message,
    });
  } catch (error) {
    console.error('Kraken error:', error);
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : 'An unexpected error occurred',
      },
      { status: 500 }
    );
  }
}
