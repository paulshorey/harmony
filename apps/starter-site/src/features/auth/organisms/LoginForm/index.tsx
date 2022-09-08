import Box from '@spiral/ui/src/features/common/atoms/Box';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@spiral/ui/src/features/common/atoms/Form';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, useState } from 'react';
import PasswordInput from '@spiral/ui/src/features/common/molecules/PasswordInput';
import AuthTemplate from 'src/features/auth/templates/AuthTemplate';
import { htmlChangeEvent, htmlSyntheticEvent, tsFixMe } from 'src/types';

export type Props = {
  firstName?: string | null;
  loading: boolean;
  logIn: (email: string, password: string) => Promise<void | boolean>;
};

const LoginForm: FC<Props> = ({ firstName, loading, logIn }) => {
  const [logInError, setLogInError] = useState<boolean>(false);
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: htmlSyntheticEvent) => {
    e.preventDefault();

    const result = await logIn(email, password);

    if (result === false) {
      setLogInError(true);
    }
  };

  async function handleEmailChange(e: htmlChangeEvent) {
    setEmail(e.currentTarget.value);
    setEmail(e.target.value);
    setLogInError(false);
  }

  const validateEmail = (e: tsFixMe) => {
    setEmailValid(e.target.validity.valid);
  };

  function handlePasswordChange(e: htmlChangeEvent) {
    setPassword(e.target.value);
  }

  const isNextEnabled = email.length > 0 && emailValid && password.length > 7;

  const next = () => {
    logIn(email, password);
  };

  const greeting: string = firstName
    ? `${firstName}, ` + 'Welcome Back!'
    : 'Welcome back!';

  const router = useRouter();

  return (
    <AuthTemplate
      back={() => router.push('/auth/register')}
      backText="I don't have an account"
      formId="login"
      isEdit={false}
      isNextEnabled={isNextEnabled}
      loading={loading}
      mobileTitle="Log in to Spiral"
      next={next}
      nextText="Log in"
      pretitle={greeting}
      title="Log in to Spiral"
      variant="login"
    >
      <form data-testid="form-login" id="login" onSubmit={handleSubmit}>
        <FormControl id="email" isInvalid={!emailValid} mb="15px">
          <FormLabel>Email</FormLabel>
          <Input
            autoFocus
            data-testid="input-email"
            onBlur={validateEmail}
            onChange={handleEmailChange}
            type="email"
            value={email}
          />
          <FormErrorMessage data-testid="error-email">
            Please make sure you enter a valid email address
          </FormErrorMessage>
        </FormControl>

        <FormControl id="password" isInvalid={Boolean(logInError)} mb="15px">
          <FormLabel>Password</FormLabel>
          <PasswordInput
            data-testid="input-password"
            onChange={handlePasswordChange}
            value={password}
          />
          <Box
            color="pink"
            display="block"
            fontSize={{ sm: '15px', xs: '13px' }}
            fontWeight={400}
            paddingBottom={'5px'}
            paddingLeft={'1px'}
            paddingTop={'15px'}
            textAlign={'right'}
          >
            <Link href="/auth/forgotten-password">Forgot password</Link>
          </Box>
          <FormErrorMessage data-testid="error-last">
            Incorrect email or password
            <p>
              The email and password combination you entered does not match our
              records. Please, double-check and try again.
            </p>
          </FormErrorMessage>
        </FormControl>
      </form>
    </AuthTemplate>
  );
};

export default LoginForm;
