import { ComponentProps, FC, Ref } from 'react';
import { cn } from '@/lib/utils/cn';

interface InputProps extends ComponentProps<'input'> {
  ref?: Ref<HTMLInputElement>;
}

const Input: FC<InputProps> = ({ className, type, ref, ...props }) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export { Input };
