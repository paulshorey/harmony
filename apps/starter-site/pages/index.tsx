import Layout from '@spiral/ui/src/features/layout/organisms/Layout';
import withLayout from '@spiral/ui/src/helpers/withLayout';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useAuth } from 'src/context/auth';
import LoginForm from 'src/features/auth/organisms/LoginForm';

const Login = () => {
  const { loginLoading, signIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // clears any redirects after 30 minutes
    const timeout = setTimeout(() => {
      if (router.asPath.includes('redirect')) {
        router.push('/auth/login');
      }
    }, 1000 * 60 * 30);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return <LoginForm loading={loginLoading} logIn={signIn} />;
};

Login.withAuth = false;
Login.layout = withLayout(Layout, {
  backgroundImage: "url('/images/login/pink-wave.png')",
  isOneColumn: true,
  noFooter: true,
});

export default Login;
