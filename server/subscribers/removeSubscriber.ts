import axiosInstance from '@/utils/axiosAuth';
import { CLIENT_LIST_KEY } from '@/constants';

export default async function removeSubscriber(userEmail: string): Promise<void> {
  try {
    const removeSubscriberUrl = `https://api.createsend.com/api/v3.3/subscribers/${CLIENT_LIST_KEY}.json?email=${encodeURIComponent(
      userEmail
    )}`;

    const response = await axiosInstance.delete(removeSubscriberUrl);

    if (response.status === 200) {
    } else {
      throw new Error('Failed to remove the subscriber from Campaign Monitor');
    }
  } catch (error) {
    console.error('Error removing subscriber:', error);
    throw new Error(
      error instanceof Error ? error.message : 'An unexpected error occurred while removing the subscriber'
    );
  }
}
