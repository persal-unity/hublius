import { useTranslations } from 'next-intl';
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
import { authenticationSteps } from './constants';

interface ResetPasswordProps {
  setStep: (step: AuthenticationStep) => void;
}

export function ResetPassword({ setStep }: ResetPasswordProps) {
  const tAuth = useTranslations('Authenticate.resetPassword');
  const tCommon = useTranslations('Common');
  const isSubmitting = false;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">{tAuth('title')}</CardTitle>
        <CardDescription>{tAuth('description')}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">{tCommon('email')}</Label>
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
                  {tAuth('loadingAction')} <CircularEasing className="ml-2" />
                </>
              ) : (
                tAuth('action')
              )}
            </Button>
          </div>
        </form>

        <div className="mt-4 text-center text-sm">
          <Button
            variant="link"
            className="p-0 underline underline-offset-4 hover:text-cyan-600"
            onClick={() => setStep(authenticationSteps.signin)}
          >
            {tCommon('goBack')}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
