import { FC, PropsWithChildren, Ref } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { Button } from './button';
import { ButtonProps } from './button';

type LinkProps = NextLinkProps &
  Pick<ButtonProps, 'variant' | 'size'> & { ref?: Ref<HTMLAnchorElement> };

const Link: FC<PropsWithChildren<LinkProps>> = ({
  variant = 'link',
  size,
  ...props
}) => {
  return (
    <Button asChild variant={variant} size={size}>
      <NextLink {...props} />
    </Button>
  );
};

export { Link };
