export type breakType =
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge';

const breaks = {
  xxsmall: 400,
  xsmall: 500,
  small: 736,
  medium: 1024,
  large: 1200,
  xlarge: 1440,
  xxlarge: 1920,
};

export type breaksType = typeof breaks;
export default breaks;
