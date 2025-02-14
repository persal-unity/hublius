'use client';

import { useTranslations } from 'next-intl';
import { z } from 'zod';
import { passwordMinLength } from '../constants';

export const useSchema = () => {
  const t = useTranslations('Form.errorMessages');

  const formSchema = z.object({
    email: z.string().email(t('email')),
    password: z
      .string()
      .min(
        passwordMinLength,
        t('passwordRequirements.minLength', { length: passwordMinLength }),
      )
      .regex(/[0-9]/, t('passwordRequirements.minDigit', { length: 1 }))
      .regex(/[a-zA-Z]/, t('passwordRequirements.minLetter', { length: 1 })),
    confirmPassword: z.string().min(6, t('confirmPassword')),
  });

  return formSchema;
};
