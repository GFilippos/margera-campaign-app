import { CLIENT_LIST_KEY } from '@/constants';
import { addSubscriberSchema } from '@/schemas/subscriberSchema';
import { NewSubscriber } from '@/types/api';
import axiosInstance from '@/utils/axiosAuth';
import { AxiosResponse } from 'axios';

export async function addSubscriber(subscriber: NewSubscriber) {
  const result = addSubscriberSchema.safeParse(subscriber);
  if (!result.success) {
    throw new Error(result.error.errors.map((e) => e.message).join(', '));
  }

  try {
    const requestBody = {
      EmailAddress: subscriber.email,
      Name: subscriber.name,
      ConsentToTrack: subscriber.consentToTrack ?? 'No',
    };

    const response: AxiosResponse<NewSubscriber | string> = await axiosInstance.post(
      `/subscribers/${CLIENT_LIST_KEY}.json`,
      requestBody
    );

    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error('Unexpected response status');
    }
  } catch (error) {
    console.error('Error adding subscriber to API:', error);
    throw new Error('Failed to add subscriber');
  }
}
