'use client';

import {
  LayoutDashboard,
  Users,
  BicepsFlexed,
  CalendarDays,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Link } from '@/i18n/routing';
import { VisuallyHidden } from '../ui/visually-hidden';
import { usePathname } from '@/i18n/routing';

const projects = [
  {
    name: 'dashboard',
    url: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    name: 'calendar',
    url: '/calendar',
    icon: CalendarDays,
  },
  {
    name: 'clients',
    url: '/clients',
    icon: Users,
  },
  {
    name: 'employees',
    url: '/employees',
    icon: BicepsFlexed,
  },
];

export function MainNavigation() {
  const { toggleSidebar, isMobile, open } = useSidebar();
  const t = useTranslations('Common');
  const pathName = usePathname();

  const handleToggle = () => {
    if (!isMobile) return;
    toggleSidebar();
  };

  return (
    <SidebarGroup>
      <VisuallyHidden>
        <SidebarGroupLabel>Main navigation</SidebarGroupLabel>
      </VisuallyHidden>

      <SidebarMenu>
        {projects.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild isActive={pathName.startsWith(item.url)}>
              <Link href={item.url} onClick={handleToggle}>
                <Tooltip {...(open ? { open: false } : {})}>
                  <TooltipTrigger>
                    <item.icon size="16" />
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Add to library</p>
                  </TooltipContent>
                </Tooltip>
                <span>{t(item.name)}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
