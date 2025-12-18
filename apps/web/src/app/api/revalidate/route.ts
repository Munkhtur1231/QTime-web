import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const authHeader = request.headers.get('authorization');

  if (authHeader !== `Bearer ${process.env.REVALIDATION_SECRET}`) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  try {
    const { tag } = await request.json();

    if (!tag) {
      return NextResponse.json({ message: 'Missing tag' }, { status: 400 });
    }

    revalidateTag(tag); // Revalidates all fetches with this tag

    return NextResponse.json({
      revalidated: true,
      tag,
      now: Date.now(),
    });
  } catch (err) {
    return NextResponse.json(
      { message: 'Error revalidating', error: String(err) },
      { status: 500 }
    );
  }
}
