import { z } from 'zod';

export type ConsentToTrack = 'Yes' | 'No';

const consentToTrackSchema = z.enum(['Yes', 'No']).optional();

export const addSubscriberSchema = z.object({
  email: z
    .string()
    .email('Invalid email format')
    .min(5, 'Email is required')
    .max(30, 'Email cant be bigger than 30 characters'),
  name: z.string().min(3, 'Name is required').max(25, 'Name cant be bigger than 25 characters'),
  consentToTrack: consentToTrackSchema,
});

export type AddSubscriberFormInputs = z.infer<typeof addSubscriberSchema>;
