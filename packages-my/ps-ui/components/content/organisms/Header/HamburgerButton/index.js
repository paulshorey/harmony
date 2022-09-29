import { css } from '@emotion/react';
import Block from '@ps/ui/components/content/atoms/Block';

const styles = {
  wrapper: (theme, opened) => css`
    display: none;
    ${theme.mq.sm} {
      display: block;
      width: 25%;
    }
    user-select: none;
  `,
  icon: (theme, opened) => css`
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
    }

    &.icon {
      font-size: 20px;
      color: ${opened ? 'white' : 'pink'};
      margin-top: 8px;
      margin-left: 8px;
      padding: 1px;
    }
  `,
};

const HamburgerButton = ({
  className,
  inWhitePage,
  isScrolled,
  opened,
  ...props
}) => {
  return (
    <Block
      as="span"
      className={`HamburgerButton ${className ? ' ' + className : ''}`}
      css={styles.wrapper(opened)}
      {...props}
    >
      {opened ? (
        <Block
          as="span"
          css={styles.icon(opened, isScrolled, inWhitePage)}
          className={'icon icon-x'}
        />
      ) : (
        <Block
          as="span"
          css={[styles.icon(opened, isScrolled, inWhitePage), css``]}
        >
          <span />
          <span />
          <span />
        </Block>
      )}
    </Block>
  );
};

export default HamburgerButton;
