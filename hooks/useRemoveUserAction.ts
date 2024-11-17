'use client';

import { useState } from 'react';

export const useRemoveUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState<string | null>(null);

  const removeUser = async (userEmail: string) => {
    setIsLoading(true);
    setHasError(null);
    try {
      const response = await fetch(`/api/subscribers/removeSubscriber?email=${encodeURIComponent(userEmail)}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to remove the user');
      }
    } catch (error) {
      console.error('Error:', error);
      setHasError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    removeUser,
    isLoading,
    hasError,
  };
};
