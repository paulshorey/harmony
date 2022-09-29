import Block, { BlockProps } from '@ps/ui/components/content/atoms/Block';
import withStyles from 'hooks/withStyles';
import { FC, memo } from 'react';

import styles from './styles';

type Props = BlockProps;

/**
 * Use the props to change gradient colors/direction/style.
 * Pass a variant to choose from predefined styles.
 */
const GradientBackground: FC<Props> = ({ ...props }) => {
  return <Block {...props} />;
};

export default memo(
  withStyles(GradientBackground, 'GradientBackground', styles)
);
