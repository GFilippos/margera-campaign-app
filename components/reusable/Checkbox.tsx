'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { ControllerRenderProps } from 'react-hook-form';

interface CustomCheckBoxProps {
  msg: string;
  field: ControllerRenderProps<any, string>;
  className?: string;
}

export function CustomCheckbox({ msg, field, className }: CustomCheckBoxProps) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Checkbox
        id="consent"
        checked={field.value === 'Yes'}
        onCheckedChange={(checked) => {
          field.onChange(checked ? 'Yes' : 'No');
        }}
      />
      <label
        htmlFor="consent"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {msg}
      </label>
    </div>
  );
}
