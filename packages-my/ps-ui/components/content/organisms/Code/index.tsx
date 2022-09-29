import Block, { BlockProps } from '@ps/ui/components/content/atoms/Block';
import useCopyToClipboard from 'hooks/useCopyToClipboard';
import withStyles from 'hooks/withStyles';
import { FC, memo } from 'react';

import styles from './styles';

type StyleProps = {
  variant?: string;
  variants?: Array<string>;
  string: string;
};
type Props = BlockProps & StyleProps;

/**
 * code
 */
const Code: FC<Props> = ({ as = 'code', string, ...props }) => {
  const [copied, copyToClipboard] = useCopyToClipboard();
  return (
    <Block {...props} as={as}>
      {string}
      <button
        type="button"
        onClick={() => {
          copyToClipboard(string);
        }}
      >
        {copied ? 'copied' : 'copy'}
      </button>
    </Block>
  );
};

export default memo(withStyles(Code, 'Code', styles));
