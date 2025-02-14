import { ComponentProps, FC, Ref, useState } from 'react';
import { Eye, EyeClosed } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { Button } from './button';

interface InputProps extends ComponentProps<'input'> {
  ref?: Ref<HTMLInputElement>;
}

const RegularInput: FC<InputProps> = ({ className, type, ref, ...props }) => {
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

const PasswordInput: FC<InputProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleState = () => setIsOpen((prevState) => !prevState);

  return (
    <div className="relative">
      <RegularInput {...props} type={isOpen ? 'text' : 'password'} />
      <Button
        type="button"
        variant="ghost"
        onClick={toggleState}
        className="absolute right-0 top-0 hover:bg-transparent"
      >
        {isOpen ? <Eye /> : <EyeClosed />}
      </Button>
    </div>
  );
};

const Input: FC<InputProps> = ({ type, ...props }) => {
  if (type === 'password') {
    return <PasswordInput {...props} />;
  }

  return <RegularInput {...props} />;
};

export { Input };
