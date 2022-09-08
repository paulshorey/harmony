import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/fullpage-horizontal');
  }, []);

  return <div>... loading ...</div>;
};

export default Index;
