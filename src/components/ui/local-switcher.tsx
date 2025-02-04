'use client';

import { useTransition } from 'react';
import { Globe } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Locale, routing, usePathname, useRouter } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function LocalSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const onSelectChange = (nextLocale: Locale) => {
    if (locale === nextLocale) {
      return;
    }

    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale, scroll: false },
      );
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild defaultValue={locale}>
        <Button variant='outline' size='icon' disabled={isPending}>
          <Globe className='h-[1.2rem] w-[1.2rem]' />
          <span className='sr-only'>Toggle local</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {routing.locales.map((cur) => (
          <DropdownMenuItem key={cur} onClick={() => onSelectChange(cur)}>
            {t('locale', { locale: cur })}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
