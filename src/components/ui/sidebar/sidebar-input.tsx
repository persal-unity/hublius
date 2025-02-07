import { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils/cn';
import { Input } from '../input';

type SidebarProps = ComponentProps<typeof Input>;

export const SidebarInput: FC<SidebarProps> = ({
  className,
  ref,
  ...props
}) => {
  return (
    <Input
      ref={ref}
      data-sidebar="input"
      className={cn(
        'focus-visible:ring-sidebar-ring h-8 w-full bg-background shadow-none focus-visible:ring-2',
        className,
      )}
      {...props}
    />
  );
};
