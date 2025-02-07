import { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils/cn';

type SidebarHeaderProps = ComponentProps<'div'>;

export const SidebarHeader: FC<SidebarHeaderProps> = ({
  className,
  ref,
  ...props
}) => {
  return (
    <div
      ref={ref}
      data-sidebar="header"
      className={cn('flex flex-col gap-2 p-2', className)}
      {...props}
    />
  );
};
