import { useRouter } from 'next/router';
import React, { FC, memo } from 'react';

import Card from '../../../common/molecules/Card';

type Props = {
  errorContext: Record<any, any>;
  pageContext?: Record<any, any>;
  siteContext?: Record<any, any>;
};

const DefaultErrorFallback: FC<Props> = ({
  errorContext,
  pageContext,
  siteContext,
}) => {
  const router = useRouter();
  const { useError } = errorContext;
  const { error } = useError();
  return (
    <Card background={'white'} data-testid="error-page" mt="68px" py="48px">
      <h2>{error.name}</h2>
      <p>{error.description}</p>
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
    </Card>
  );
};

export default memo(DefaultErrorFallback);
