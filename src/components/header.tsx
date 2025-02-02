import { cn } from '@/lib/utils/cn';
import { Link } from './ui/link';

export function Header() {
  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full bg-background/80 shadow-md backdrop-blur-md',
        'border-b border-border',
      )}
    >
      <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-3'>
        {/* Logo */}
        <div className='text-lg font-semibold'>Hublius</div>

        <nav className='hidden items-center gap-6 md:flex'>
          <Link href='/'>Home</Link>
        </nav>
      </div>
    </header>
  );
}
