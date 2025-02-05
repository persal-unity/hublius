'use client';

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { SignIn } from './signin';
import { SignUp } from './signup';
import { ResetPassword } from './reset-password';
import type { AuthenticationStep } from './types';

export function Authenticate() {
  const [step, setStep] = useState<AuthenticationStep>('signin');

  const component = {
    signin: <SignIn setStep={setStep} />,
    signup: <SignUp setStep={setStep} />,
    resetPassword: <ResetPassword setStep={setStep} />,
  };

  return <AnimatePresence initial={false}>{component[step]}</AnimatePresence>;
}
