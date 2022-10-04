import { css, useTheme } from '@emotion/react';
import useVariants from 'src/hooks/useVariants';
import styles from './styles';
import Center from 'src/components/layout/molecules/Center';

const Title = ({ tag = 'h5', variant, variants, children, ...props }) => {
  const TagName = `${tag}`;
  return (
    <TagName
      {...props}
      css={useVariants({
        styles,
        variant, // see index.stories.js for example usage
        variants, // see index.stories.js for example usage
        label: 'Title',
      })}
    >
      {children}
    </TagName>
  );
};

export default Title;