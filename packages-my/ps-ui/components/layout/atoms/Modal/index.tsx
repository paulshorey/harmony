import { css } from '@emotion/react';
import React, { useEffect } from 'react';
import ReactModal from 'react-modal';
import emotion_variants from '@ps/fn/browser/style/emotion_variants';

import styles from './styles';

export type ModalProps = {
  children?: any;
  className?: string;
  contentLabel?: string;
  css?: any;
  isOpen: boolean;
  label?: string;
  onClose?: any;
  showClose?: boolean;
  style?: any;
  variant?: string;
  variants?: string[];
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose = () => {},
  contentLabel = '',
  children,
  showClose = true,
  label,
  variant,
  variants,
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
      css={emotion_variants({
        styles,
        label: label || 'Modal',
        variant,
        variants,
      })}
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
        {variant === 'cloudinary' && (
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

export default Modal;
