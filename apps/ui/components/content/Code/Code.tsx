import React, { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import themeDark from 'prism-react-renderer/themes/nightOwl';
import themeLight from 'prism-react-renderer/themes/nightOwlLight';
import Box from '@ps/ui/components/content/Box';
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode';
import { faCopy } from '@fortawesome/free-solid-svg-icons/faCopy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type PrismThemeType = typeof themeDark;

export type Props = {
  'code': string;
  'language'?: Language;
  'prismTheme'?: PrismThemeType;
  'variant'?: string;
  'data-variants'?: string;
  'showNumbers'?: boolean;
  'collapsed'?: boolean;
  'copyable'?: boolean;
};

const Code = ({
  code = '',
  language = 'jsx',
  prismTheme,
  'data-variants': dataVariants = '',
  showNumbers = false,
  collapsed = false,
  copyable = false,
}: Props) => {
  // default = dark
  let theme;
  // pass variant="light" or variant="transparentLight" to use light theme
  if (
    dataVariants?.includes('light') ||
    dataVariants?.includes('transparentLight')
  ) {
    theme = { ...themeLight, ...{ plain: { ...themeLight.plain } } };
  } else {
    theme = { ...themeDark, ...{ plain: { ...themeDark.plain } } };
  }
  // default theme
  if (dataVariants.includes('light')) {
    theme.plain.backgroundColor = 'hsla(22deg 8% 88% / 0.99)';
  } else if (dataVariants.includes('transparentLight')) {
    theme.plain.backgroundColor = 'hsla(33deg 8% 88% / 0.88)';
  } else if (dataVariants.includes('transparentDark')) {
    theme.plain.backgroundColor = 'hsla(22deg 3% 9% / 0.67)';
  } else {
    theme.plain.backgroundColor = 'hsla(22deg 5% 15% / 0.95)';
  }
  // customize theme from props
  if (prismTheme) {
    theme = { ...theme, ...prismTheme };
  }

  const [collapsedState, set_collapsedState] = useState(collapsed || false);

  let ControlsTop;
  if (collapsed) {
    ControlsTop = (
      <Box
        as="span"
        ss={css`
          position: absolute;
          top: 0;
          right: 0;
          z-index: 100;
          opacity: 0.75;
          height: 1.95rem;
          line-height: 1.9rem;
          padding: 0 0.5rem;
          cursor: pointer;
          background: ${theme.plain.backgroundColor};
          color: #efefef;
          border-radius: 0.5rem;
        `}
        onClick={() => {
          set_collapsedState(!collapsedState);
        }}
      >
        {collapsedState && 'show '}
        <FontAwesomeIcon icon={faCode} />
      </Box>
    );
  }
  let ControlsBottom;
  if (copyable) {
    ControlsBottom = (
      <Box
        as="span"
        ss={css`
          position: absolute;
          bottom: 0.05rem;
          right: 0;
          z-index: 100;
          opacity: 0.75;
          height: 1.95rem;
          line-height: 1.9rem;
          padding: 0 0.5rem;
          cursor: pointer;
          background: ${theme.plain.backgroundColor};
          color: #efefef;
          border-radius: 0.5rem;
        `}
        onClick={() => {}}
      >
        {collapsedState && 'copy '}
        <FontAwesomeIcon icon={faCopy} />
      </Box>
    );
  }
  // render
  return (
    <>
      {ControlsTop && ControlsTop}
      {!collapsedState && ControlsBottom && ControlsBottom}
      <Highlight
        {...defaultProps}
        theme={theme}
        code={code}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => {
          if (collapsedState) {
            style.height = '1.95rem';
            style.padding = '0.3rem 0.2rem 0.4rem 0';
            style.overflow = 'hidden';
          }
          style.transition = 'height: 1s, padding: 1s';
          return (
            <Pre className={className} style={style}>
              {tokens.map((line, i) => (
                <Line key={i} {...getLineProps({ line, key: i })}>
                  {showNumbers ? <LineNo>{i + 1}</LineNo> : <>&nbsp;</>}&nbsp;
                  <LineContent>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </LineContent>
                </Line>
              ))}
            </Pre>
          );
        }}
      </Highlight>
    </>
  );
};

export default Code;

export const Wrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;

  & .token-line {
    line-height: 1.5em;
    height: 1.5em;
  }
`;

export const Line = styled.div`
  display: table-row;
`;

export const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

export const LineContent = styled.span`
  display: table-cell;
`;
