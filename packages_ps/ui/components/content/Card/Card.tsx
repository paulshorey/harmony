import React from 'react';
import styled from '@emotion/styled';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import themeDark from 'prism-react-renderer/themes/nightOwl';
import themeLight from 'prism-react-renderer/themes/vsLight';

export type CodeThemeType = typeof themeDark;

export type Props = {
  code: string;
  language?: Language;
  prismTheme?: CodeThemeType;
  variant?: string;
  dataVariants?: string;
};

const Code = ({
  code = '',
  language = 'jsx',
  prismTheme: themeProp,
  dataVariants = '',
}: Props) => {
  let theme;
  // customize theme from variants
  if (dataVariants) {
    if (dataVariants.includes('-prismLight')) {
      theme = { ...themeLight };
    } else if (dataVariants.includes('-transparentDark')) {
      theme = {
        ...themeDark,
        ...{ plain: { backgroundColor: 'rgba(0,0,0,0.54)' } },
      };
    } else if (dataVariants.includes('-transparentLight')) {
      theme = {
        ...themeLight,
        ...{ plain: { backgroundColor: 'rgba(222,222,222,0.22)' } },
      };
    }
  }
  // default theme
  if (!theme) {
    theme = {
      ...themeDark,
      ...{ plain: { backgroundColor: 'hsl(255deg 38% 20%)' } },
    };
  }
  // customize theme from props
  if (themeProp) {
    theme = { ...theme, ...themeProp };
  }
  // render
  return (
    <Highlight {...defaultProps} theme={theme} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </Pre>
      )}
    </Highlight>
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
    line-height: 1.3em;
    height: 1.3em;
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
