import { Subscriber } from '@/types/api';

export const SUBSCRIBERS_HEADERS_MAP: Partial<Record<keyof Subscriber, string>> = {
  EmailAddress: 'Email Address',
  Name: 'Name',
  Date: 'Date Joined',
  ConsentToTrack: 'Consent To Track',
};

export const CLIENT_LIST_KEY = '6a28549af9a1aac814544565b8cfe1de';
