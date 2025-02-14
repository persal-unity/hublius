'use client';

import { useTranslations } from 'next-intl';
import { z } from 'zod';

export const useSchema = () => {
  const t = useTranslations('Form.errorMessages');

  const formSchema = z.object({
    email: z.string().email(t('email')),
    password: z.string().min(1, t('required')),
  });

  return formSchema;
};
