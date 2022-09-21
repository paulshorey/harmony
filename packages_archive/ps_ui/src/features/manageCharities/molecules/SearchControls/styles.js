import { css } from '@emotion/react';
import theme from 'src/styles/theme';

export default {
  default: css`
    padding: 20px 0 15px;
    display: flex;

    :focus {
      outline: none;
      border-color: ${theme.colors.pink};
    }

    ::placeholder {
      color: ${theme.colors.gray};
    }

    &:last-child {
      min-width: 100px;
    }
  `,
};
