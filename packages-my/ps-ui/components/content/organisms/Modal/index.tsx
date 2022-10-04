import { Props as BlockProps } from 'components/content/atoms/Block';
import withStyles from 'styles/withStyles';
import React, { memo, useEffect } from 'react';
import ReactModal from 'react-modal';
import variants from './variants';
import objects_add_values from '@ps/fn/io/objects/objects_add_values';

export type Props = BlockProps & {
  contentLabel?: string;
  isOpen: boolean;
  label?: string;
  onClose?: any;
  showClose?: boolean;
  type?: string;
};

export const Component: React.FC<Props> = ({
  isOpen,
  onClose = () => {},
  contentLabel = '',
  children,
  showClose = true,
  type = '',
  ...props
}) => {
  // I forget what exactly this does and why it was necessary.
  useEffect(() => {
    if (typeof window === 'object') {
      if (isOpen) {
        setTimeout(function () {
          document.body.style.overflow = 'hidden';
        }, 100);
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  }, [isOpen]);

  return (
    <ReactModal
      {...props}
      contentLabel={contentLabel}
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="ReactModalOverlay"
    >
      <div
        css={`
          width: 100%;
          height: 100%;
          overflow: auto;
          flex-grow: 1;
        `}
      >
        {type === 'cloudinary' && (
          <h3 className="ModalExtraTitle">
            Click: image checkbox, then &quot;Insert&quot;
          </h3>
        )}
        {children}
        {showClose && (
          <span
            className="ModalCloseX"
            css={`
              position: absolute;
              top: 24px;
              right: 20px;
              z-index: 1000000;
              display: block;
              background: none;
              border: none;
              outline: none;
              cursor: pointer;
              img {
                width: 18px;
                height: 18px;
              }
            `}
            onClick={() => {
              onClose();
            }}
            role="button"
            tabIndex={0}
          >
            <img alt="x" src="/icons/x-nocircle.svg" />
          </span>
        )}
      </div>
    </ReactModal>
  );
};

/*
 * Copy/paste everything below to sync code between components. Then change the name of the variables.
 */
const Default = memo(withStyles(Component, 'Modal', variants));

/*
 * This is an HOC, like Styled in @emotion/styled or Styled-Components, to help with styling, and managing props.
 * First you must call it with an object of props which will be used by all instances.
 * Then, you can use the returned value as a normal component. Pass to it props that only the specific instance will use.
 * Can not abstract this to a separate file, because Typescript does not support passing props as args.
 */
export const withModal = (props1: Props) => (props2: Props) => {
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
 * Default export is ready to use: <Modal {...yourProps} />
 */
export default Default;
