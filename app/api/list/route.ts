import { getClientList } from '@/server/list/fetchList';
import { Client } from '@/types/api';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const lists: Client[] = await getClientList();
    return NextResponse.json(lists);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error message:', error.message);
    }
    return NextResponse.json({ error: 'Failed to fetch lists' }, { status: 500 });
  }
}
