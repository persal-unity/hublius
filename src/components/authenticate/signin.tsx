import { Dispatch, SetStateAction } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { GoogleIcon } from '../icons';
import type { AuthenticationStep } from './types';

interface SignInProps {
  setStep: Dispatch<SetStateAction<AuthenticationStep>>;
}

export function SignIn({ setStep }: SignInProps) {
  return (
    <motion.div
      className="flex w-full max-w-sm flex-col gap-6"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline" className="w-full">
            <GoogleIcon />
            Google
          </Button>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Button
                    type="button"
                    variant="link"
                    className="p-0"
                    onClick={() => setStep('resetPassword')}
                  >
                    Forgot your password?
                  </Button>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
          </form>

          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <Button
              variant="link"
              className="p-0 underline underline-offset-4 hover:text-cyan-600"
              onClick={() => setStep('signup')}
            >
              Sign up
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
