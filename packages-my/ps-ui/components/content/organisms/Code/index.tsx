import Div, { DivProps } from '@ps/ui/components/content/atoms/Div';
import useCopyToClipboard from 'hooks/useCopyToClipboard';
import useVariants from 'hooks/useVariants';
import { FC } from 'react';

import styles from './styles';

type StyleProps = {
  variant?: string;
  variants?: Array<string>;
  string: string;
};
type Props = DivProps & StyleProps;

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
    <Div
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
    </Div>
  );
};

export default code;
