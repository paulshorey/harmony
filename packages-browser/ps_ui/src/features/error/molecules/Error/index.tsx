import { FC, memo } from 'react';

import Card from '../../../common/molecules/Card';

type Props = {
  buttonText?: string;
  icon?: string;
  onClick?: () => void;
  subtitle?: string;
  title?: string;
};

const Error: FC<Props> = ({ ...props }) => {
  return (
    <Card
      background={'white'}
      data-testid="error-container"
      mt="68px"
      py="48px"
    >
      <h2>{props.title}</h2>
      <p>{props.subtitle}</p>
    </Card>
  );
};

export default memo(Error);
