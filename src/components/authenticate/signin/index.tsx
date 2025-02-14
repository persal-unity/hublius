import { Dispatch, SetStateAction } from 'react';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';
import { z } from 'zod';
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
import type { AuthenticationStep } from '../types';
// import { useRouter } from '@/i18n/routing';
import { useSchema } from './schema';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormErrorMessage,
} from '@/components/ui/form';

interface SignInProps {
  setStep: Dispatch<SetStateAction<AuthenticationStep>>;
}

export function SignIn({ setStep }: SignInProps) {
  const tAuth = useTranslations('Authenticate');
  const tCommon = useTranslations('Common');
  const formSchema = useSchema();
  // const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // router.push('/dashboard');
  };

  return (
    <motion.div
      className="flex w-full max-w-sm flex-col gap-6"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <FormProvider {...form}>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{tCommon('login')}</CardTitle>
            <CardDescription>{tAuth('sigin.description')}</CardDescription>
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
                      <div className="flex items-center justify-between">
                        <FormLabel>{tCommon('password')}</FormLabel>
                        <Button
                          type="button"
                          variant="link"
                          className="h-auto p-0"
                          onClick={() => setStep('resetPassword')}
                        >
                          {tAuth('sigin.forgotPassword')}
                        </Button>
                      </div>

                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                      <FormErrorMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit">{tAuth('sigin.action')}</Button>
              </div>
            </form>

            <div className="mt-4 text-center text-sm">
              {tAuth('sigin.question')}{' '}
              <Button
                variant="link"
                className="p-0 underline underline-offset-4 hover:text-cyan-600"
                onClick={() => setStep('signup')}
              >
                {tCommon('signup')}
              </Button>
            </div>
          </CardContent>
        </Card>
      </FormProvider>
    </motion.div>
  );
}
