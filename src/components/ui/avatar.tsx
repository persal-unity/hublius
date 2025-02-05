'use client';

import { ComponentProps, FC } from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cn } from '@/lib/utils/cn';

type AvatarProps = ComponentProps<typeof AvatarPrimitive.Root>;

const Avatar: FC<AvatarProps> = ({ className, ref, ...props }) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
      className,
    )}
    {...props}
  />
);

type AvatarImageProps = ComponentProps<typeof AvatarPrimitive.Image>;

const AvatarImage: FC<AvatarImageProps> = ({ className, ref, ...props }) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('aspect-square h-full w-full', className)}
    {...props}
  />
);

type AvatarFallbackProps = ComponentProps<typeof AvatarPrimitive.Fallback>;

const AvatarFallback: FC<AvatarFallbackProps> = ({
  className,
  ref,
  ...props
}) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted',
      className,
    )}
    {...props}
  />
);

export { Avatar, AvatarImage, AvatarFallback };
