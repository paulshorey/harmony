import { css, useTheme } from '@emotion/react';
import useVariants from 'src/hooks/useVariants';
import styles from './styles';

const List = ({ tag = 'ul', variant, variants, children, className = '', ...props }) => {
  const TagName = `${tag}`;
  return (
    <TagName
      {...props}
      css={useVariants({
        styles,
        variant, // see index.stories.js for example usage
        variants, // see index.stories.js for example usage
        label: 'List',
      })}
      className={'List' + (className ? ' ' + className : '')}
    >
      {children}
    </TagName>
  );
};

export default List;
