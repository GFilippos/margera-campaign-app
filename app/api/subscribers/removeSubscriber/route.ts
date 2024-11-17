import removeSubscriber from '@/server/subscribers/removeSubscriber';
import { NextResponse } from 'next/server';

export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url);
    const userEmail = url.searchParams.get('email');

    if (!userEmail) {
      return NextResponse.json({ error: 'Subscriber email is required' }, { status: 400 });
    }

    await removeSubscriber(userEmail);
    return NextResponse.json({ message: 'Subscriber successfully removed' }, { status: 200 });
  } catch (error: unknown) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to remove subscriber' },
      { status: 500 }
    );
  }
}
