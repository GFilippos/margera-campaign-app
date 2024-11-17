'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  const handleHomeRedirect = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <h1 className="text-3xl text-red-500">404</h1>
      <p className="text-lg">Oh no! The page you&apos;re looking for doesn&apos;t exist!</p>
      <Button onClick={handleHomeRedirect}>Take me back</Button>
    </div>
  );
}
