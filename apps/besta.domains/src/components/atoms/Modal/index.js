import React, { useContext, useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { css, useTheme } from '@emotion/react';
import ReactModal from 'react-modal';
import vars from 'src/styles/vars';

const styles = {
  modal: css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px auto 3vh;
    width: 100%;
    max-width: 880px;
    outline: none;
    position: relative;
    z-index: 1000;
    border-radius: 18px;
    box-shadow: 0 0 30px 0 hsla(0deg 0% 0% 0.2);
    background-color: #fff;
    padding: 28px 40px;
    height: auto;
    min-height: 300px;
    transition: min-height 1s, border-radius 0.4s;

    ${vars.mq.sm}, (max-height: 736px) {
      margin: 0;
      padding: 15px 24px 15px 24px;
      transition: min-height 0.5s, border-radius 0.4s;
      border-radius: 0;
      min-height: 100%;
    }
  `,
  content: css`
    width: 100%;
    height: 100%;
    overflow: auto;
  `,
  closeButton: css`
    position: absolute;
    top: 24px;
    right: 20px;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    width: 18px;
    height: 18px;
  `,
};

const Modal = ({ isOpen, onClose, contentLabel, children, showClose, className }) => {
  useEffect(() => {
    // react immediately
    if (typeof window === 'object') {
      if (!!isOpen) {
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
      css={styles.modal}
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={contentLabel}
      ariaHideApp={false}
      overlayClassName="ReactModalOverlay"
      className={'Modal' + (className ? ' ' + className : '')}
    >
      <div css={styles.content}>{children}</div>
      {showClose && (
        <img
          src="/images/icons-black/x.svg"
          alt="x"
          css={styles.closeButton}
          type="button"
          onClick={onClose}
        />
      )}
    </ReactModal>
  );
};

Modal.propTypes = {
  'isOpen': propTypes.bool.isRequired,
  'onClose': propTypes.func,
  'contentLabel': propTypes.string,
  'style': propTypes.object,
  'children': propTypes.node,
  'showClose': propTypes.bool,
  'data-testid': propTypes.string,
};

Modal.defaultProps = {
  'contentLabel': '',
  'style': null,
  'children': null,
  'showClose': true,
  'data-testid': '',
  'onClose': null,
};

export default Modal;
