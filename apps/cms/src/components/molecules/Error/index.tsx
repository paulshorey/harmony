import { FC, memo } from 'react';

type Props = {
  buttonText?: string;
  icon?: string;
  onClick?: () => void;
  subtitle?: string;
  title?: string;
};

const Error: FC<Props> = ({ title, subtitle, ...props }) => {
  return (
    <div {...props}><h2>Error:</h2>
    <h3>{title}</h3>
    <p>{subtitle}</p>
    </div>
  );
};

export default memo(Error);
