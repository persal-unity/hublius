import { useTranslations } from 'next-intl';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { GoogleIcon } from '../../icons';
import { AuthenticationStep } from '../types';
import { useSchema } from './schema';
import {
  FormControl,
  FormDescription,
  FormErrorMessage,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { authenticationSteps, passwordMinLength } from '../constants';

interface SignUpProps {
  setStep: (step: AuthenticationStep) => void;
}

export function SignUp({ setStep }: SignUpProps) {
  const tAuth = useTranslations('Authenticate');
  const tCommon = useTranslations('Common');
  const tForm = useTranslations('Form');
  const formSchema = useSchema();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // router.push('/dashboard');
  };

  return (
    <FormProvider {...form}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{tAuth('signup.title')}</CardTitle>
          <CardDescription>{tAuth('signup.description')}</CardDescription>
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
                {tAuth('orContinueWith')}
              </span>
            </div>
          </div>

          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{tCommon('email')}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="m@example.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormErrorMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{tCommon('password')}</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        {...field}
                        autoComplete="new-password"
                      />
                    </FormControl>
                    <FormDescription>
                      {tForm('description.password', {
                        length: passwordMinLength,
                      })}
                    </FormDescription>
                    <FormErrorMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{tCommon('confirmPassword')}</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormErrorMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                {tAuth('signup.action')}
              </Button>
            </div>
          </form>

          <div className="mt-4 text-center text-sm">
            {tAuth('signup.question')}{' '}
            <Button
              variant="link"
              className="p-0 underline underline-offset-4 hover:text-cyan-600"
              onClick={() => setStep(authenticationSteps.signin)}
            >
              {tCommon('signin')}
            </Button>
          </div>
        </CardContent>
      </Card>
    </FormProvider>
  );
}
