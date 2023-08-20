import { ReactNode, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/Button/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import type { FieldError } from 'react-hook-form';
import { Input } from '@/components/Inputs/Input';
import router from 'next/router';
import { LoginSchema, LoginType } from '@/helpers/formHelpers';
import styles from '@/styles/components/Form.module.scss';

const formatErrors = (errors: Record<string, FieldError>) =>
  Object.keys(errors).map(key => ({
    key,
    message: errors[key].message,
  }));
/* ---------- Some UI components ----------*/

type AlertType = 'error' | 'warning' | 'success';

// Global Alert div.
const Alert = ({
  children,
  type,
}: {
  children: ReactNode;
  type: AlertType;
}) => {
  const backgroundColor =
    type === 'error' ? 'tomato' : type === 'warning' ? 'orange' : 'powderBlue';

  return <div style={{ backgroundColor: backgroundColor }}>{children}</div>;
};

// Use role="alert" to announce the error message.
const AlertInput = ({ children }: { children: ReactNode }) =>
  Boolean(children) ? (
    <span role='alert' className='error-clr'>
      {children}
    </span>
  ) : null;

/* ---------- React component ----------*/

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors, isSubmitting, isSubmitted, isDirty, isValid },
  } = useForm<LoginType>({
    mode: 'onChange',
    resolver: zodResolver(LoginSchema),
  });

  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  useEffect(() => {
    setFocus('username');
  }, [setFocus]);

  return (
    <form
      className={styles['form-cont']}
      action='/api/signin'
      onSubmit={async e => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await fetch(e.currentTarget.action, {
          method: 'POST',
          body: JSON.stringify({
            username: formData.get('username'),
            password: formData.get('password'),
          }),
          headers: {
            'Content-Type': 'application/json',
          },
          redirect: 'manual',
        });

        if (response.status === 0 || response.ok) {
          router.push('/'); // redirect to profile page on success
        }
        if (!response.ok) {
          const result = (await response.json()) as {
            error?: string;
          };
          setErrorMessage(result.error ?? null);
        }
      }}>
      <div className='mt-lg-16 mt-sm-8'>
        {errorMessage && (
          <Alert type='error'>
            <p className='error secondary-clr'>{errorMessage}</p>
          </Alert>
        )}
      </div>
      <div>
        <div className='mt-sm-16 mt-lg-24'>
          <label htmlFor='username' className='secondary-clr'>
            Username
          </label>
          <Input
            id='username'
            classes='mt-lg-8 mt-sm-8'
            autoComplete='one-time-code'
            {...register('username')}
            aria-invalid={Boolean(errors.username)}
          />
          <AlertInput>{errors?.username?.message}</AlertInput>
        </div>
      </div>
      <div>
        <div className='mt-sm-16 mt-lg-24'>
          <label htmlFor='password' className='secondary-clr'>
            Password
          </label>
          <Input
            classes='mt-lg-8 mt-sm-8'
            type='password'
            id='password'
            autoComplete='one-time-code'
            {...register('password')}
            aria-invalid={Boolean(errors.password)}
          />
          <AlertInput>{errors?.password?.message}</AlertInput>
        </div>
      </div>

      <Button
        type='submit'
        size='lg'
        variant='secondary'
        classes='my-lg-48 my-sm-32'
        disabled={isSubmitting || !isValid}>
        Submit
      </Button>
      {/* <pre>{JSON.stringify(formatErrors, null, 2)}</pre>
        <pre>{JSON.stringify(watch(), null, 2)}</pre>
        <pre>
          formState ={' '}
          {JSON.stringify(
            { isSubmitting, isSubmitted, isDirty, isValid },
            null,
            2
          )}
        </pre> */}
    </form>
  );
}
