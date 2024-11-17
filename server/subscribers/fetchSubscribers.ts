import axiosInstance from '@/utils/axiosAuth';
import { SubscriberListResponse } from '@/types/api';
import getDate from '@/utils/getDate';
import { CLIENT_LIST_KEY } from '@/constants';

export default async function fetchSubscribers(): Promise<SubscriberListResponse> {
  try {
    const response = await axiosInstance.get<SubscriberListResponse>(`/lists/${CLIENT_LIST_KEY}/active.json`, {
      params: {
        date: getDate(),
        page: 1,
        pagesize: 10,
        orderfield: 'email',
        orderdirection: 'asc',
        includetrackingpreference: true,
        includesmspreference: false,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error in fetchSubscribers:', error);
    throw new Error('Failed to fetch subscriber data');
  }
}
