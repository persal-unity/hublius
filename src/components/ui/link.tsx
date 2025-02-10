import { FC, PropsWithChildren, Ref } from 'react';
import { Link as NextLink } from '@/i18n/routing';
import { Button } from './button';
import { ButtonProps } from './button';

type LinkProps = Pick<ButtonProps, 'variant' | 'size'> & {
  ref?: Ref<HTMLAnchorElement>;
} & {
  href: string;
  className?: string;
};

const Link: FC<PropsWithChildren<LinkProps>> = ({
  variant = 'link',
  size,
  className,
  ...props
}) => {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <NextLink {...props} />
    </Button>
  );
};

export { Link };
