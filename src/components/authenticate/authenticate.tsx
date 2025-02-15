'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useSearchParams } from 'next/navigation';
import { useRouter, usePathname } from '@/i18n/routing';
import { SignIn } from './signin';
import { SignUp } from './signup';
import { ResetPassword } from './reset-password';
import type { AuthenticationStep } from './types';
import { authenticationSteps } from './constants';

const componentProps = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0 },
  transition: { type: 'spring', stiffness: 100 },
  className:
    'flex w-full max-w-sm flex-col gap-6 py-4 top-0 h-full items-center justify-center',
};

export function Authenticate() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const step = searchParams.get('step');

  const handleChangeStep = (newStep: AuthenticationStep) => {
    const params = new URLSearchParams(`step=${newStep}`);

    const route =
      newStep === authenticationSteps.signin
        ? pathname
        : `${pathname}?${params.toString()}`;

    router.push(route);
  };

  return (
    <div className="flex h-full w-full items-center justify-center overflow-x-hidden">
      <AnimatePresence initial={false} mode="popLayout">
        {(!step ||
          step === authenticationSteps.signin ||
          !Object.values(authenticationSteps).includes(
            step as AuthenticationStep,
          )) && (
          <motion.div
            key={step}
            {...componentProps}
            initial={{ opacity: 0, x: -100 }}
          >
            <SignIn setStep={handleChangeStep} />
          </motion.div>
        )}
        {step === authenticationSteps.signup && (
          <motion.div key={step} {...componentProps}>
            <SignUp setStep={handleChangeStep} />
          </motion.div>
        )}
        {step === authenticationSteps.resetPassword && (
          <motion.div key={step} {...componentProps}>
            <ResetPassword setStep={handleChangeStep} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
