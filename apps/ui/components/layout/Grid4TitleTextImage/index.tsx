import { forwardRef, memo, ReactElement, HTMLAttributes } from 'react';
import variants from './styles';
import { Props as BlockProps } from '@ps/ui/components/content/Block';
import useStyledOriginal from '@ps/ui/styles/useStyledOriginal';
import withProps from '@ps/ui/hooks/withProps';
import styleProps from '@ps/ui/types/styles';

export type Props = {
  image: ReactElement;
  title: ReactElement;
  text: ReactElement;
  as?: BlockProps['as'];
} & styleProps &
  HTMLAttributes<HTMLDivElement>;

/**
 * IMPORTANT:
 * title, text, and image must each contain exactly one React JSX child. DO NOT USE the React.Fragment <></>
 */
export const Component: (props: Props, ref?: any) => ReactElement = (
  { image, text, title, as, ...props },
  ref
) => {
  const [Styled, otherProps] = useStyledOriginal(
    props,
    as || 'div',
    'Grid4TitleTextImage',
    variants
  );
  return (
    <Styled ref={ref} {...otherProps}>
      <div className="Grid4TitleTextImage-title">{title}</div>
      <div className="Grid4TitleTextImage-text">{text}</div>
      <div className="Grid4TitleTextImage-image">{image}</div>
    </Styled>
  );
};

export default memo(forwardRef(Component));

export const withGrid4TitleTextImage = (props: Props) =>
  memo(withProps(forwardRef(Component), props));
