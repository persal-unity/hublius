import { FC, PropsWithChildren } from 'react';
import { Slot } from '@radix-ui/react-slot';

interface VisuallyHidden {
  asChild?: boolean;
}

export const VisuallyHidden: FC<PropsWithChildren<VisuallyHidden>> = ({
  asChild,
  ...props
}) => {
  const Comp = asChild ? Slot : 'span';
  return <Comp className="sr-only" {...props} />;
};
