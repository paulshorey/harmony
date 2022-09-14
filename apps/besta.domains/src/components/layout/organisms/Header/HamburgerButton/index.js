import { css, useTheme } from '@emotion/react';
import vars from 'src/styles/vars';
import Div from 'src/components/layout/atoms/Div';

const styles = {
  wrapper: (opened) => css`
    display: none;
    ${vars.mq.sm} {
      display: block;
      width: 25%;
    }
    user-select: none;
  `,
  icon: (opened, isScrolled, inWhitePage) => css`
    user-select: none;
    cursor: pointer;
    display: inline-block;
    position: relative;
    width: 26px;
    margin-top: 6px;
    margin-left: 2px;

    span {
      user-select: none;
      display: block;
      width: 100%;
      margin: 4px 0;
      height: 3px;
      border-radius: 1px;
      overflow: hidden;
      background: ${opened || isScrolled || !inWhitePage ? 'white' : vars.blueTheme.bgColorDarker};
    }

    &.icon {
      font-size: 20px;
      color: ${!!opened ? 'white' : vars.colors.pink};
      margin-top: 8px;
      margin-left: 8px;
      padding: 1px;
    }
  `,
};

const HamburgerButton = ({ isScrolled, inWhitePage, opened, className, ...props }) => {
  return (
    <Div
      as="span"
      className={`HamburgerButton ${className ? ' ' + className : ''}`}
      css={styles.wrapper(opened)}
      {...props}
    >
      {opened ? (
        <Div
          as="span"
          css={styles.icon(opened, isScrolled, inWhitePage)}
          className={'icon icon-x'}
        />
      ) : (
        <Div as="span" css={[styles.icon(opened, isScrolled, inWhitePage), css``]}>
          <span />
          <span />
          <span />
        </Div>
      )}
    </Div>
  );
};

export default HamburgerButton;
