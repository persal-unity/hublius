import type { ComponentProps, FC } from 'react';
import { ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { Link } from './link';

type BreadcrumbProps = ComponentProps<'nav'> & {
  separator?: React.ReactNode;
};

const Breadcrumb: FC<BreadcrumbProps> = ({ ref, ...props }) => (
  <nav ref={ref} aria-label="breadcrumb" {...props} />
);

type BreadcrumbListProps = ComponentProps<'ol'>;

const BreadcrumbList: FC<BreadcrumbListProps> = ({
  className,
  ref,
  ...props
}) => (
  <ol
    ref={ref}
    className={cn(
      'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5',
      className,
    )}
    {...props}
  />
);

type BreadcrumbItemProps = ComponentProps<'li'>;

const BreadcrumbItem: FC<BreadcrumbItemProps> = ({
  className,
  ref,
  ...props
}) => (
  <li
    ref={ref}
    className={cn('inline-flex items-center gap-1.5', className)}
    {...props}
  />
);

type BreadcrumbLinkProps = ComponentProps<typeof Link>;

const BreadcrumbLink: FC<BreadcrumbLinkProps> = ({
  className,
  ref,
  ...props
}) => {
  return (
    <Link
      ref={ref}
      className={cn(
        'h-auto p-0 font-normal text-inherit transition-colors hover:text-foreground',
        className,
      )}
      {...props}
    />
  );
};

type BreadcrumbPageProps = ComponentProps<'span'>;

const BreadcrumbPage: FC<BreadcrumbPageProps> = ({
  className,
  ref,
  ...props
}) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn('font-normal text-foreground', className)}
    {...props}
  />
);

type BreadcrumbSeparatorProps = ComponentProps<'li'>;

const BreadcrumbSeparator: FC<BreadcrumbSeparatorProps> = ({
  children,
  className,
  ...props
}) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn('[&>svg]:h-3.5 [&>svg]:w-3.5', className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
);

type BreadcrumbEllipsisProps = ComponentProps<'li'>;

const BreadcrumbEllipsis: FC<BreadcrumbEllipsisProps> = ({
  className,
  ...props
}) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
