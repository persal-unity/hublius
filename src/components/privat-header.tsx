'use client';

// import { Fragment } from 'react';
import { SidebarTrigger } from './ui/sidebar';
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from './ui/breadcrumb';
import { Separator } from './ui/separator';
import { LocalSwitcher } from './ui/local-switcher';
import { ModeToggle } from './ui/mode-theme';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './ui/breadcrumb';
import { usePathname } from '@/i18n/routing';
import { Fragment } from 'react';

export function PrivatHeader() {
  const pathname = usePathname();

  const segments = pathname.split('/').filter(Boolean);

  return (
    <header className="sticky top-0 flex shrink-0 items-center justify-between gap-2 border-b bg-background px-4 py-2">
      <div className="flex items-center">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />

        <Breadcrumb>
          <BreadcrumbList>
            {segments.map((path, index) => {
              const isLast = index === segments.length - 1;
              const href = '/' + segments.slice(0, index + 1).join('/');

              if (isLast) {
                return (
                  <BreadcrumbItem key={path}>
                    <BreadcrumbPage className="capitalize">
                      {path}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                );
              }

              return (
                <Fragment key={path}>
                  <BreadcrumbItem className="hidden capitalize md:block">
                    <BreadcrumbLink href={href}>{path}</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                </Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex items-center gap-4">
        <LocalSwitcher />
        <ModeToggle />
      </div>
    </header>
  );
}
