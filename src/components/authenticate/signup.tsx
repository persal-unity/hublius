import { ComponentPropsWithoutRef, Dispatch, SetStateAction } from 'react';
import { cn } from '@/lib/utils/cn';
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
import { AuthenticationStep } from './types';

interface SignUpProps extends ComponentPropsWithoutRef<'div'> {
  setStep: Dispatch<SetStateAction<AuthenticationStep>>;
}

export function SignUp({ className, setStep, ...props }: SignUpProps) {
  return (
    <div
      className={cn('flex w-full max-w-sm flex-col gap-6', className)}
      {...props}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
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
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Create account
              </Button>
            </div>
          </form>

          <div className="mt-4 text-center text-sm">
            Already have an account?{' '}
            <Button
              variant="link"
              className="p-0 underline underline-offset-4 hover:text-cyan-600"
              onClick={() => setStep('signin')}
            >
              Sign in
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
