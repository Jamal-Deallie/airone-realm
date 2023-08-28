'use client';

import { Input, TextArea } from '@/components/Inputs';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import styles from '@/styles/components/Form.module.scss';
import { Button } from '@/components/Button';
type FormProps = {
  name: string;
  phoneNumber: string;
  email: string;
  message: string;
};

const contactSchema = z
  .object({
    name: z.string(),
    phoneNumber: z.string().min(10),
    email: z.string().email({ message: 'The email is invalid.' }),
    message: z.string().min(10),
  })
  .required();

type ContactType = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting, isSubmitted, isDirty, isValid },
  } = useForm<ContactType>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<FormProps> = data => {
    fetch('/api/email', {
      method: 'post',
      body: JSON.stringify(data),
    });
    reset();
  };

  return (
    <form
      method='post'
      onSubmit={handleSubmit(onSubmit)}
      className={styles['form-cont']}>
      <div>
        <div>
          <label htmlFor='name' className='secondary-clr'>
            Name
          </label>
          <Input
            type='text'
            {...register('name')}
            id='name'
            autoComplete='one-time-code'
          />
        </div>
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      </div>
      <div>
        <div className='mt-sm-16 mt-lg-24'>
          <label htmlFor='phoneNumber' className='secondary-clr'>
            Phone Number
          </label>
          <Input
            type='text'
            {...register('phoneNumber')}
            id='phoneNumber'
            autoComplete='one-time-code'
          />
        </div>
        {errors.phoneNumber && (
          <p className={styles.error}>{errors.phoneNumber.message}</p>
        )}
      </div>
      <div className='mt-sm-16 mt-lg-24'>
        <div className={styles.input}>
          <label htmlFor='email' className='secondary-clr'>
            Email
          </label>
          <Input
            type='email'
            {...register('email')}
            id='email'
            autoComplete='one-time-code'
          />
        </div>
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>
      <div className='mt-sm-16 mt-lg-24'>
        <div className={styles.input}>
          <label htmlFor='message' className='secondary-clr'>
            Message
          </label>
          <TextArea
            {...register('message')}
            rows={10}
            id='message'
            autoComplete='one-time-code'
          />
        </div>
        {errors.message && (
          <p className={styles.error}>{errors.message.message}</p>
        )}
      </div>
      <Button
        value='Submit'
        size='lg'
        variant='secondary'
        full
        classes='my-lg-32 my-sm-32'>
        Submit
      </Button>
    </form>
  );
}
