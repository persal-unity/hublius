import { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils/cn';

type SidebarFooterProps = ComponentProps<'div'>;

export const SidebarFooter: FC<SidebarFooterProps> = ({
  className,
  ref,
  ...props
}) => {
  return (
    <div
      ref={ref}
      data-sidebar="footer"
      className={cn('flex flex-col gap-2 p-2', className)}
      {...props}
    />
  );
};
