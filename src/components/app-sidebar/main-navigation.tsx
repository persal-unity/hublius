'use client';

import { LayoutDashboard, Users, BicepsFlexed } from 'lucide-react';
import { useTranslations } from 'next-intl';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
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
  const { toggleSidebar, isMobile } = useSidebar();
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
            <SidebarMenuButton asChild isActive={item.url === pathName}>
              <Link href={item.url} onClick={handleToggle}>
                <item.icon />
                <span>{t(item.name)}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
