import Block, { BlockProps } from '@ps/ui/components/content/atoms/Block';
import withStyles from 'hooks/withStyles';
import { FC, memo } from 'react';

import styles from './styles';

type Props = BlockProps;

const Card: FC<Props> = (props) => {
  return <Block {...props} />;
};

export default memo(withStyles(Card, 'Card', styles));
