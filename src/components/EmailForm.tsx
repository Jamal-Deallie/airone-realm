import { useState, SyntheticEvent, memo } from 'react';
import cn from 'classnames';
import styles from '@/styles/components/EmailForm.module.scss';

function EmailForm({
  title,
  desc,
  classes,
}: {
  title: string;
  desc?: string;
  classes?: string;
}) {
  const [email, setEmail] = useState('');

  const onInputSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    alert(`The email you entered was: ${email}`);
  };

  return (
    <div className={cn(styles['form'], classes)}>

      <form className={styles['email-input']}>
        <input
          type='email'
          placeholder='Enter your email address'
          name='email'
          autoComplete='one-time-code'
        />
        <button
          type='submit'
          aria-label='Submit your email address'
          id='Submit your email address'>
          <span className='secondary-clr'>&#8594;</span>
        </button>
      </form>
    </div>
  );
}

export default memo(EmailForm);
