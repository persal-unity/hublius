'use client';

import { ComponentProps, FC } from 'react';
import { PanelLeft } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { Button } from '../button';
import { useSidebar } from './sidebar-provider';

type SidebarTriggerProps = ComponentProps<typeof Button>;

export const SidebarTrigger: FC<SidebarTriggerProps> = ({
  className,
  onClick,
  ref,
  ...props
}) => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn('h-7 w-7', className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
};
