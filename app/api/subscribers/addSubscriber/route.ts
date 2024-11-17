import { addSubscriber } from '@/server/subscribers/addSubscriber';
import { NextResponse } from 'next/server';
import { NewSubscriber } from '@/types/api';

export async function POST(req: Request) {
  try {
    const subscriber: NewSubscriber = await req.json();
    const newSubscriber = await addSubscriber(subscriber);

    return NextResponse.json(newSubscriber, { status: 201 });
  } catch (error: unknown) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to add subscriber' },
      { status: 500 }
    );
  }
}
