import { cn } from '@/lib/utils/cn';
import { Slot } from '@radix-ui/react-slot';
import { ComponentProps, FC } from 'react';

type SidebarGroupProps = ComponentProps<'div'>;

export const SidebarGroup: FC<SidebarGroupProps> = ({
  className,
  ref,
  ...props
}) => {
  return (
    <div
      ref={ref}
      data-sidebar="group"
      className={cn('relative flex w-full min-w-0 flex-col p-2', className)}
      {...props}
    />
  );
};

type SidebarGroupLabelProps = ComponentProps<'div'> & { asChild?: boolean };

export const SidebarGroupLabel: FC<SidebarGroupLabelProps> = ({
  className,
  ref,
  asChild = false,
  ...props
}) => {
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      ref={ref}
      data-sidebar="group-label"
      className={cn(
        'text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-none transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
        'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
        className,
      )}
      {...props}
    />
  );
};
