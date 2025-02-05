'use client';

import { useState } from 'react';
import { SignIn } from './signin';
import { SignUp } from './signup';
import type { AuthenticationStep } from './types';

export function Authenticate() {
  const [step, setStep] = useState<AuthenticationStep>('signin');

  const component = {
    signin: <SignIn setStep={setStep} />,
    signup: <SignUp setStep={setStep} />,
  };

  return component[step];
}
