import Block, { BlockProps } from '@ps/ui/components/content/atoms/Block';
import { FC, memo } from 'react';
import withStyles from 'hooks/withStyles';
import styles from '@ps/ui/components/content/molecules/Centered/styles';

type Props = BlockProps & {};

/**
 * Card description sfa dfas afds afsd asdf afds fd sfds afds afsd a fdsaf sdafds f dsafds fsd
 *     afsd fd fd fsda fsd fds afdsa fsd afsd fsd fsd sfda fdsa fdsafs dfsa d afsd afsdafsd
 */
const Card: FC<Props> = ({ ...props }) => {
  return <Block {...props} />;
};

export default memo(withStyles(Card, 'Card', styles));
