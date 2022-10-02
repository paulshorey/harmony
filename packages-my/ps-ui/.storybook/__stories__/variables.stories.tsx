import React from 'react';
import Block from '@ps/ui/components/content/atoms/Block';
import { css } from '@emotion/react';
import { themeType as t, optionsType as o } from '@ps/ui/styles/theme';

const colors = {
  gold: 'hsl(45deg 100% 45%)',
  offwhite: '#897DDB',
};
const containerStyleProps = {
  css: (theme: t, opt: o) => css`
    &,
    & > * {
      color: white;
    }
    .gold {
      color: gold;
      font-weight: 600;
    }
    a, .orange {
      color: ${colors.gold};
    }
    svg {
      display: inline;
      color: ${colors.gold};
      padding-left: 0;
      margin-left: 0;
      height: 12px;
      width: auto;
      position: relative;
      top: 2px;
    }
    h6 {
      margin-bottom: 0;
    }
    b {
      color: white;
      white-space: nowrap;
    }
    p {
      display: block;
      font-size: 0.67em;
      margin: 0.67rem 0;
    }
    pre {
      color: color: gold;
      margin: 0;
      opacity: 0.5;
    }
    code {
      color: gold;
      font-weight: 700;
    }
  `,
  ssIframe: `
  p span {
    display: block;
    white-space: nowrap;
  }`,
};
const codeStyles = {
  css: (theme: t, opt: o) => css`
    text-indent: 1rem;
    display: none;
    font-size: 0.75em;
    &:after {
      content: "='display:block'";
      padding-left: 1rem;
      color: white;
      opacity: 0.5;
      font-weight: 400;
    }
    &.cssDefaultCode {
      display: block;
      &:after {
        content: '={css\`display:block\`}';
      }
    }
  `,
};

export const VariantsAndThemes = ({ args }) => {
  return (
    <Block {...containerStyleProps}>
      <h5>
        These <span className="gold">props </span> would apply styles to your
        current <span className="orange">page size</span>:
      </h5>
    </Block>
  );
};

export default {
  component: Block,
  id: '3',
  title: 'Variants And Themes',
  argTypes: {},
  isExpanded: true,
  parameters: {
    docs: {
      description: {
        component: `dafsfdfd
          `,
      },
      source: {
        code: `
        `,
      },
    },
  },
};
