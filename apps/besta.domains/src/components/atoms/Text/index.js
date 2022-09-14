import { css, useTheme } from '@emotion/react';
import useVariants from 'src/hooks/useVariants';
import styles from './styles';

const Text = ({ tag = 'p', variant, variants, children, className = '', ...props }) => {
  const TagName = `${tag}`;
  return (
    <TagName
      {...props}
      css={useVariants({
        styles,
        variant, // see index.stories.js for example usage
        variants, // see index.stories.js for example usage
        label: 'Text',
      })}
      className={className}
    >
      {children}
    </TagName>
  );
};

export default Text;
