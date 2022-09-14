import { css, useTheme } from '@emotion/react';
import useVariants from 'src/hooks/useVariants';
import styles from './styles';

const Grid = ({ tag = 'div', variant, variants, children, ...props }) => {
  const TagName = `${tag}`;
  const theme = useTheme();
  theme.Grid = {
    childrenLength: children.length || 1,
  };
  return (
    <TagName
      {...props}
      css={useVariants({
        theme,
        styles,
        variant, // see index.stories.js for example usage
        variants, // see index.stories.js for example usage
        label: 'Grid',
      })}
    >
      {children}
    </TagName>
  );
};
export default Grid;
