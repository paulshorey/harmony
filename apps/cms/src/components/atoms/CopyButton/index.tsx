import { FC } from 'react';
import { useClipboard } from 'use-clipboard-copy';

type CopyButtonProps = {
  icon?: string;
  successIcon?: string;
  value: string;
};
/**
 * A generic button to assist with copying to a user's clipboard
 * @TODO - Make a more well thoughtout component using Button and Box props
 */
const CopyButton: FC<CopyButtonProps> = ({
  children,
  icon = 'documents-two',
  successIcon = 'checkmark',
  value,
  ...rest
}) => {
  const { copied, copy } = useClipboard({
    copiedTimeout: 600, // timeout duration in milliseconds
  });

  return (
    <button onClick={() => copy(value)} {...rest}>
      {children}
    </button>
  );
};

export default CopyButton;
