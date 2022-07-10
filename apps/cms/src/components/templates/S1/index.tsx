import { FC } from 'react';

type S1Template = {};
const S1Template: FC<S1Template> = ({ ...props }) => {
  return <div {...props}>Scrollll.....</div>;
};

export default S1Template;
