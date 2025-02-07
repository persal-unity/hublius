import { ComponentProps, FC } from 'react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils/cn';

type SidebarSeparatorProps = ComponentProps<typeof Separator>;

export const SidebarSeparator: FC<SidebarSeparatorProps> = ({
  className,
  ref,
  ...props
}) => {
  return (
    <Separator
      ref={ref}
      data-sidebar="separator"
      className={cn('bg-sidebar-border mx-2 w-auto', className)}
      {...props}
    />
  );
};
