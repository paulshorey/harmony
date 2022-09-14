import { css, useTheme } from '@emotion/react';
import styles from './styles';

const SvgImg = ({ src, width, height, variant, alt, ...props }) => {
  const theme = useTheme();
  return (
    <span
      role="img"
      aria-label={alt}
      css={[
        styles.default(src, height || width),
        styles[variant] && styles[variant](theme, src, height || width),
      ]}
      {...props}
    />
  );
};

export default SvgImg;
