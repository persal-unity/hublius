import { cn } from '@/lib/utils/cn';
import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps, FC } from 'react';

type SidebarMenuProps = ComponentProps<'ul'>;

export const SidebarMenu: FC<SidebarMenuProps> = ({
  className,
  ref,
  ...props
}) => (
  <ul
    ref={ref}
    data-sidebar="menu"
    className={cn('flex w-full min-w-0 flex-col gap-1', className)}
    {...props}
  />
);

type SidebarMenuItemProps = ComponentProps<'li'>;

export const SidebarMenuItem: FC<SidebarMenuItemProps> = ({
  className,
  ref,
  ...props
}) => (
  <li
    ref={ref}
    data-sidebar="menu-item"
    className={cn('group/menu-item relative', className)}
    {...props}
  />
);

type SidebarMenuSubProps = ComponentProps<'ul'>;

export const SidebarMenuSub: FC<SidebarMenuSubProps> = ({
  className,
  ref,
  ...props
}) => (
  <ul
    ref={ref}
    data-sidebar="menu-sub"
    className={cn(
      'border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5',
      'group-data-[collapsible=icon]:hidden',
      className,
    )}
    {...props}
  />
);

type SidebarMenuSubButtonProps = ComponentProps<'a'> & {
  asChild?: boolean;
  size?: 'sm' | 'md';
  isActive?: boolean;
};

export const SidebarMenuSubButton: FC<SidebarMenuSubButtonProps> = ({
  asChild = false,
  size = 'md',
  isActive,
  className,
  ref,
  ...props
}) => {
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        'text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
        'data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground',
        size === 'sm' && 'text-xs',
        size === 'md' && 'text-sm',
        'group-data-[collapsible=icon]:hidden',
        className,
      )}
      {...props}
    />
  );
};

type SidebarMenuSubItemProps = ComponentProps<'li'>;

export const SidebarMenuSubItem: FC<SidebarMenuSubItemProps> = ({
  ref,
  ...props
}) => <li ref={ref} {...props} />;

type SidebarMenuActionProps = ComponentProps<'button'> & {
  asChild?: boolean;
  showOnHover?: boolean;
};

export const SidebarMenuAction: FC<SidebarMenuActionProps> = ({
  className,
  asChild = false,
  showOnHover = false,
  ref,
  ...props
}) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        'text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-none transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
        // Increases the hit area of the button on mobile.
        'after:absolute after:-inset-2 after:md:hidden',
        'peer-data-[size=sm]/menu-button:top-1',
        'peer-data-[size=default]/menu-button:top-1.5',
        'peer-data-[size=lg]/menu-button:top-2.5',
        'group-data-[collapsible=icon]:hidden',
        showOnHover &&
          'peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0',
        className,
      )}
      {...props}
    />
  );
};
