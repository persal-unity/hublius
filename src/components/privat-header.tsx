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

export function PrivatHeader() {
  // const pathname = usePathname();

  // const segments = pathname.split('/').filter(Boolean).slice(1);

  return (
    <header className="sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background p-4">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      {/* <Breadcrumb>
        <BreadcrumbList>
          {segments.map((path, index) => {
            const isLast = index === segments.length - 1;
            const href = '/' + segments.slice(0, index + 1).join('/');

            if (isLast) {
              return (
                <BreadcrumbItem key={path}>
                  <BreadcrumbPage className="capitalize">{path}</BreadcrumbPage>
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
      </Breadcrumb> */}
    </header>
  );
}
