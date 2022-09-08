import { css } from '@emotion/react';
import mq from 'src/styles/mq';

export const pageWidth = css`
  margin-left: auto;
  margin-right: auto;
  width: auto;
  max-width: 1160px;

  ${mq.between('medium', 'large')} {
    width: auto;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
  }
  ${mq.between('small', 'medium')} {
    padding-left: 1.3rem;
    padding-right: 1.3rem;
  }
`;
