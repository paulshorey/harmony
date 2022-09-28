import Block, { BlockProps } from '@ps/ui/components/content/atoms/Block';
import useCopyToClipboard from 'hooks/useCopyToClipboard';
import useVariants from 'hooks/useVariants';
import { FC } from 'react';

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
const code: FC<Props> = ({
  as = 'code',
  string,
  variant = 'default',
  variants,
  ...props
}) => {
  const [copied, copyToClipboard] = useCopyToClipboard();
  return (
    <Block
      as={as}
      css={useVariants({
        styles,
        variant, // see index.stories.js for example usage
        variants, // see index.stories.js for example usage
        label: 'Code',
      })}
      {...props}
    >
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

export default code;
