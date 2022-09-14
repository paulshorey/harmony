import { css, useTheme } from '@emotion/react';
import useVariants from 'src/hooks/useVariants';
import Div from '../../atoms/Div';
import styles from './styles';

const Center = ({ tag = 'div', variant, variants, children, className = '', ...props }) => {
  return (
    <Div
      as={tag}
      {...props}
      css={useVariants({
        styles,
        variant, // see index.stories.js for example usage
        variants, // see index.stories.js for example usage
        label: 'Center',
      })}
      className={className}
    >
      {children}
    </Div>
  );
};

export default Center;
