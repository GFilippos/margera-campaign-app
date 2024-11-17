'use client';

import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AddSubscriberFormInputs, addSubscriberSchema } from '@/schemas/subscriberSchema';
import { Input } from '../ui/input';
import { CustomCheckbox } from '../reusable/Checkbox';
import { Button } from '../ui/button';
import CustomLoader from '../reusable/CustomLoader';

export default function AddSubscriberForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddSubscriberFormInputs>({
    resolver: zodResolver(addSubscriberSchema),
  });

  const onSubmit = async (data: AddSubscriberFormInputs) => {
    setIsLoading(true);

    try {
      const response = await fetch('/api/subscribers/addSubscriber', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        setMessage('Subscriber added successfully!');
      } else {
        setMessage(responseData.error || 'Failed to subscribe');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4 px-12 pb-12 pt-4">
      <h1 className="text-gray-600">Enter your subscriber information below</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Input id="email" placeholder="Email" {...register('email')} />
            {errors.email && (
              <p className="text-red-600 text-sm font-semibold tracking-wide mt-2">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col space-y-1.5">
            <Input id="name" placeholder="Name" {...register('name')} />
            {errors.name && (
              <p className="text-red-600 text-sm font-semibold tracking-wide mt-2">{errors.name.message}</p>
            )}
          </div>
          <Controller
            name="consentToTrack"
            control={control}
            render={({ field }) => <CustomCheckbox msg="Consent Tracking" field={field} />}
          />
          {errors.consentToTrack && (
            <p className="text-red-600 text-sm font-semibold tracking-wide mt-2">{errors.consentToTrack.message}</p>
          )}
          {errors.consentToTrack && <p className="error">{errors.consentToTrack.message}</p>}
          <Button type="submit" disabled={isLoading}>
            {isLoading ? <CustomLoader innerClassName="h-6 w-6 border-2 border-t-2" /> : 'Add Subscriber'}
          </Button>
        </div>
      </form>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}
