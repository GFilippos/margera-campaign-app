import fetchSubscribers from '@/server/subscribers/fetchSubscribers';
import { SubscriberListResponse } from '@/types/api';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const subscribers: SubscriberListResponse = await fetchSubscribers();
    return NextResponse.json(subscribers);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error message:', error.message);
    }
    return NextResponse.json({ error: 'Failed to fetch lists' }, { status: 500 });
  }
}
