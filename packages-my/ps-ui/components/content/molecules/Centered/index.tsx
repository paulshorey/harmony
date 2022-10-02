import Block, { BlockProps } from '@ps/ui/components/content/atoms/Block';
import withStyles from 'styles/withStyles';
import { FC, memo } from 'react';

import styles from './styles';

type Props = BlockProps;

/**
 * ```<Centered as="p" style="width:200px">
 *   This text fits in a narrow column because it wraps to several lines...
 *   <span style="white-space:nowrap">This text is wider than 200px but can't wrap!</span>
 * </Centered>```
 * In this example, the `span` will not fit the column because of `white-space:nowrap`. It will stick out to the left and right. BUT with the help of \<Centered\>, it will still be centered in relation to the surrounding content.`.
 *
 * You must pass `props.width` for the magic to work. Otherwise it will just function like `text-align:center`.
 */
const Centered: FC<Props> = (props) => {
  return <Block {...props} />;
};

export default memo(withStyles(Centered, 'Centered', styles));
