'use client';

import { useEffect, useRef, useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { useRemoveUser } from '@/hooks/useRemoveUserAction';
import CustomLoader from '../reusable/CustomLoader';

interface DeleteActionButtonProps {
  userEmail: string;
}

const DeleteActionButton = ({ userEmail }: DeleteActionButtonProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const { removeUser, isLoading } = useRemoveUser();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
        setIsDialogOpen(false);
      }
    };

    if (isDialogOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDialogOpen]);

  const handleDelete = async () => {
    await removeUser(userEmail);
    setIsDialogOpen(false);
    window.location.reload();
  };

  return (
    <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Remove</Button>
      </AlertDialogTrigger>
      <AlertDialogContent ref={dialogRef} className="border-2 border-red-600 text-red-600">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to remove the user?</AlertDialogTitle>
          <AlertDialogDescription className="text-red-600">
            This action cannot be undone. This will permanently remove the user from the client list.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="font-semibold">Cancel</AlertDialogCancel>
          <AlertDialogAction className="font-semibold text-red-600" onClick={handleDelete} disabled={isLoading}>
            {isLoading ? <CustomLoader /> : 'Remove'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteActionButton;
