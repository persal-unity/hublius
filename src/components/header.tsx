import { cn } from '@/lib/utils/cn';
import { Link } from './ui/link';
import { ModeToggle } from './ui/mode-theme';
import { LocalSwitcher } from './ui/local-switcher';

export function Header() {
  return (
    <header
      className={cn(
        'h-16',
        'sticky top-0 z-50 w-full bg-background/80 shadow-md backdrop-blur-md',
        'border-b border-border',
        'flex items-center justify-between',
      )}
    >
      <p>HUBLIUS</p>
      <LocalSwitcher />
      <ModeToggle />
      <nav className='hidden items-center gap-6 md:flex'>
        <Link href='/'>Home</Link>
      </nav>
    </header>
  );
}
