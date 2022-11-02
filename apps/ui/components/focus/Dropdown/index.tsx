import React, { cloneElement, useMemo, useState } from 'react';
import Box, { Props as BoxProps } from '@ps/ui/components/content/Box';
import {
  Placement,
  offset,
  flip,
  shift,
  autoUpdate,
  useFloating,
  useInteractions,
  useRole,
  useId,
  useClick,
  useHover,
  FloatingFocusManager,
  computePosition,
  arrow,
} from '@floating-ui/react-dom-interactions';
import { mergeRefs } from 'react-merge-refs';
import useStyledProps from '@ps/ui/styles/useStyledProps';
import variants from './variants';

export type Props = {
  /**
   * dropdown | tooltip | modal
   */
  variant: 'dropdown' | 'tooltip' | 'modal';
  /**
   * Children to render inside the dropdown/tooltip. React component function/class.
   */
  render:
    | JSX.Element
    | ((data: {
        close: () => void;
        labelId: string;
        descriptionId: string;
      }) => React.ReactNode);
  /**
   * This component uses https://floating-ui.com/ props
   */
  placement?: Placement;
  /**
   * Trigger content. What will always be visible on page. NOT the stuff to render inside the dropdown/tooltip - that goes into the render prop.
   */
  children: JSX.Element;
  /**
   * Whether to show the dropdown/tooltip on hover (mouse-over).
   */
  hover?: boolean;
} & BoxProps;
const DEBUG_FORCE_OPEN = false;

/**
 * This component uses https://floating-ui.com/ props, with added styles and variants logic.
 */
export const Component = ({ children, render, placement, ...props }: Props) => {
  // Variants
  if (props.variant === 'tooltip') {
    props.textcolor = 'light';
    props.bgcolor = 'dark';
    placement = 'top';
  }

  // State
  const [open, setOpen] = useState(false);

  const { x, y, reference, floating, strategy, context } = useFloating({
    open,
    onOpenChange: setOpen,
    middleware: [offset(5), flip(), shift()],
    placement,
    whileElementsMounted: autoUpdate,
  });

  const id = useId();
  const labelId = `${id}-label`;
  const descriptionId = `${id}-description`;

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context, {
      enabled: DEBUG_FORCE_OPEN || props.variant !== 'tooltip',
    }),
    useHover(context, {
      enabled: props.variant === 'tooltip' && !DEBUG_FORCE_OPEN,
    }),
    // useRole(context),
  ]);

  // Preserve the consumer's ref
  const ref = useMemo(
    () => mergeRefs([reference, (children as any).ref]),
    [reference, children]
  );

  // Styles
  const styledProps = useStyledProps({
    props,
    componentName: 'Dropdown',
    variants,
  });

  // Arrow
  // const arrowEl = React.createRef();
  // computePosition(ref, floating, {
  //   middleware: [
  //     arrow({
  //       element: arrowEl.current,
  //     }),
  //   ],
  // }).then(({ middlewareData }) => {
  //   if (middlewareData.arrow) {
  //     const { x, y } = middlewareData.arrow;

  //     // Object.assign(arrowEl?.current?.style, {
  //     //   left: x != null ? `${x}px` : '',
  //     //   top: y != null ? `${y}px` : '',
  //     // });
  //   }
  // });
  return (
    <>
      {cloneElement(children, getReferenceProps({ ref, ...children.props }))}
      {open && (
        <FloatingFocusManager
          context={context}
          modal={DEBUG_FORCE_OPEN || props.variant === 'modal'}
          order={['reference', 'content']}
          returnFocus={true}
        >
          <Box
            {...getFloatingProps()}
            {...styledProps}
            ref={floating}
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
            }}
            aria-labelledby={labelId}
            aria-describedby={descriptionId}
          >
            {typeof render === 'function'
              ? render({
                  labelId,
                  descriptionId,
                  close: () => {
                    setOpen(false);
                  },
                })
              : render}
            <div ref={arrowEl}></div>
          </Box>
        </FloatingFocusManager>
      )}
    </>
  );
};

export default Component;
