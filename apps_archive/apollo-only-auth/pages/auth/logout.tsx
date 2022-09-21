import Loading from '@ps/ui/src/features/common/atoms/Loading';
import React, { useEffect } from 'react';
import { useAuth } from 'src/context/auth';

const Logout: React.FC = () => {
  const { signOut } = useAuth();

  useEffect(() => {
    signOut();
  }, []);

  return <Loading />;
};

export default Logout;
