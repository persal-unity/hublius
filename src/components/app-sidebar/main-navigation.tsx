'use client';

import { LayoutDashboard, Users, BicepsFlexed } from 'lucide-react';
import { useTranslations } from 'next-intl';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Link } from '@/i18n/routing';
import { VisuallyHidden } from '../ui/visually-hidden';

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
  const t = useTranslations('Common');

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <VisuallyHidden>
        <SidebarGroupLabel>Main navigation</SidebarGroupLabel>
      </VisuallyHidden>

      <SidebarMenu>
        {projects.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <Link href={item.url}>
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
