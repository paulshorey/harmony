import { useRouter } from 'next/router';
import { FC, memo } from 'react';
import { useError } from 'src/context/error';
import Error from '../Error';

const DefaultError: FC = () => {
  const router = useRouter();
  const { error } = useError();
  return (
    <div>
      <Error
      title={error.name}
      subtitle={error.description}
       />
      <button
        css={{
          color: '#d92e76',
          display: 'block',
          fontWeight: 500,
          margin: '0 auto',
          marginTop: 24,
        }}
        data-testid="button-go-to-home-page"
        onClick={() => router.push('/home')}
      >
        Go to home page
      </button>
    </div>
  );
};

export default memo(DefaultError);
