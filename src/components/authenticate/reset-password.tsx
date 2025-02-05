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
import { CircularEasing } from '../ui/loader/circular-easing';
import { AuthenticationStep } from './types';

interface ResetPasswordProps {
  setStep: Dispatch<SetStateAction<AuthenticationStep>>;
}

export function ResetPassword({ setStep }: ResetPasswordProps) {
  const isSubmitting = false;

  return (
    <motion.div
      className="flex w-full max-w-sm flex-col gap-6"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Reset password</CardTitle>
          <CardDescription>
            Enter your email below to reset your password
          </CardDescription>
        </CardHeader>
        <CardContent>
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
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    Resetting password <CircularEasing className="ml-2" />
                  </>
                ) : (
                  'Reset password'
                )}
              </Button>
            </div>
          </form>

          <div className="mt-4 text-center text-sm">
            <Button
              variant="link"
              className="p-0 underline underline-offset-4 hover:text-cyan-600"
              onClick={() => setStep('signin')}
            >
              Go back
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
