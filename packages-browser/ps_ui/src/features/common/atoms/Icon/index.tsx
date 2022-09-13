import { FC } from 'react';

export type Props = {
  'aria-label'?: string;
  'data-testid'?: string;
  'display'?: 'block' | 'inline-block' | 'inline-flex';
  'height'?: number;
  'src'?: string;
  'style'?: any;
  'type': string;
  'width'?: number;
};

const Icon: FC<Props> = ({
  'aria-label': ariaLabel,
  'data-testid': testId,
  display = 'block',
  height = 25,
  src = null,
  style = '',
  type,
  width = 25,
}) => {
  return (
    <img
      alt={`icon ${type}`}
      aria-label={ariaLabel || type}
      css={{ display, height: `${height}px`, ...style, width: `${width}px` }}
      data-testid={testId}
      src={src || `/icons/${type}.svg`}
    />
  );
};

export default Icon;
