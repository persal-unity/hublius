import { cn } from '@/lib/utils/cn';

import { ModeToggle } from '../ui/mode-theme';
import { LocalSwitcher } from '../ui/local-switcher';
import { AccountAction } from './account-action';
import { Logo } from '../logo';

export function Header() {
  return (
    <header
      className={cn(
        'sticky',
        'h-16',
        'flex justify-center',
        'px-4',
        'border-b border-border shadow-sm',
        'bg-background/70 backdrop-blur-lg backdrop-saturate-150',
        'inset-x-0 top-0 z-40',
      )}
    >
      <div
        className={cn(
          'container',
          'w-full',
          'flex items-center justify-between',
        )}
      >
        <Logo />
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <LocalSwitcher />
            <ModeToggle />
          </div>
          <AccountAction />
        </div>
      </div>
    </header>
  );
}
