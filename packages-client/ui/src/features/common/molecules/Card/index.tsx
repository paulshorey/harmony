import React from 'react';

export type Props = {
  children: React.ReactNode;
};

const Card: React.FC<Props> = ({ children, ...rest }) => (
  <div css={{ boxShadow: '0 1px 5px 0 rgba(111, 126, 130, 0.25)' }} {...rest}>
    {children}
  </div>
);

export default Card;
