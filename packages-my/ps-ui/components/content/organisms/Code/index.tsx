import Block, { Props as BlockProps } from 'components/content/atoms/Block';
import useCopyToClipboard from 'hooks/useCopyToClipboard';
import withStyles from 'styles/withStyles';
import { FC, memo, forwardRef } from 'react';
import objects_add_values from '@ps/fn/io/objects/objects_add_values';
import variants from './variants';

export type Props = BlockProps & {
  string: string;
};
/**
 * Instead of props.children, the content rendered by this component must be string type.
 */
export const Component: FC<Props> = forwardRef(
  ({ as = 'code', string, ...props }: any, ref) => {
    const [copied, copyToClipboard] = useCopyToClipboard();
    return (
      <Block {...props} as={as} ref={ref}>
        {string}
        <button
          type="button"
          onClick={() => {
            copyToClipboard(string);
          }}
        >
          {copied ? 'copied' : 'copy'}
        </button>
      </Block>
    );
  }
);

/*
 * Copy/paste everything below to sync code between components. Then change the name of the variables.
 */
const Default = memo(withStyles(Component, 'Code', variants));

/*
 * This is an HOC, like Styled in @emotion/styled or Styled-Components, to help with styling, and managing props.
 * First you must call it with an object of props which will be used by all instances.
 * Then, you can use the returned value as a normal component. Pass to it props that only the specific instance will use.
 * Can not abstract this to a separate file, because Typescript does not support passing props as args.
 */
export const withCode = (props1: Props) => (props2: Props) => {
  const props = objects_add_values(
    props1,
    props2,
    ';',
    ['children'],
    ['ss'],
    'props'
  );
  return <Default {...props} children={props2.children} />;
};

/**
 * Default export is ready to use: <Code {...yourProps} />
 */
export default Default;
