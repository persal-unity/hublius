'use client';

import { ComponentProps, FC } from 'react';
import { Root as RadixLabel } from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils/cn';

const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
);

type LabelProps = ComponentProps<typeof RadixLabel> &
  VariantProps<typeof labelVariants>;

const Label: FC<LabelProps> = ({ className, ref, ...props }) => (
  <RadixLabel ref={ref} className={cn(labelVariants(), className)} {...props} />
);

export { Label };
