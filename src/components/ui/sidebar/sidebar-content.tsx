import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils/cn';

type SidebarContentProps = ComponentProps<'div'>;

export const SidebarContent: FC<SidebarContentProps> = ({
  className,
  ref,
  ...props
}) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        'flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden',
        className,
      )}
      {...props}
    />
  );
};
