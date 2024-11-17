'use client';

import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import CustomLoader from '../reusable/CustomLoader';
import { Subscriber } from '@/types/api';
import { SUBSCRIBERS_HEADERS_MAP } from '@/constants';
import DeleteActionButton from './DeleteActionButton';

const SubscriberTable = () => {
  const [subscribers, setSubscribers] = useState<Subscriber[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await fetch('/api/subscribers/fetchSubscribers');
        if (!response.ok) {
          throw new Error('Failed to fetch subscribers');
        }
        const data = await response.json();
        setSubscribers(data.Results);
      } catch (err) {
        setHasError(err instanceof Error ? err.message : 'Something went wrong');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSubscribers();
  }, []);

  /* eslint-disable @typescript-eslint/no-unused-vars */
  const filteredHeaders = Object.entries(SUBSCRIBERS_HEADERS_MAP)
    .filter(([key, value]) => value !== '')
    .map(([key, value]) => ({ key, label: value }));

  if (isLoading) {
    return <CustomLoader className="pt-12" />;
  }

  if (hasError) {
    return <div>Error: {hasError}</div>;
  }

  const lastHeaderIndex = filteredHeaders.length - 1;

  return (
    <Table className="table-fixed">
      <TableHeader>
        <TableRow>
          {filteredHeaders.map(({ label }, index) => (
            <TableHead key={label} className={index === lastHeaderIndex ? 'text-center' : ''}>
              {label}
            </TableHead>
          ))}
          <TableHead className="text-center">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {subscribers && subscribers.length > 0 ? (
          subscribers.map((subscriber, rowIndex) => (
            <TableRow key={rowIndex}>
              {filteredHeaders.map(({ key }, index) => (
                <TableCell key={key} className={`${index === lastHeaderIndex ? 'text-center' : ''} h-24 break-words`}>
                  {subscriber[key as keyof Subscriber] || '-'}
                </TableCell>
              ))}
              <TableCell className="text-center">
                <DeleteActionButton userEmail={subscriber.EmailAddress} />
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow className="h-full">
            <TableCell colSpan={5} className="h-24 justify-center text-center font-semibold">
              There are no subscribers in the list.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default SubscriberTable;
