import { CLIENT_LIST_KEY } from '@/constants';
import { Client } from '@/types/api';
import axiosInstance from '@/utils/axiosAuth';

export async function getClientList(): Promise<Client[]> {
  try {
    const response = await axiosInstance.get(`https://api.createsend.com/api/v3.3/lists/${CLIENT_LIST_KEY}.json`);
    return response.data;
  } catch (error) {
    console.error('Error fetching lists:', error);
    throw error;
  }
}
