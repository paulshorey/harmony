import { css } from '@emotion/react';
import { Props } from 'components/content/atoms/Block';
import withStyles from 'styles/withStyles';
import React, { memo, useEffect } from 'react';
import ReactModal from 'react-modal';

import styles from './styles';

export type ModalProps = Props & {
  contentLabel?: string;
  isOpen: boolean;
  label?: string;
  onClose?: any;
  showClose?: boolean;
  type?: string;
};

const Modal: React.FC<ModalProps> = ({
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
        css={css`
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
            css={css`
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

export default memo(withStyles(Modal, 'Modal', styles));
