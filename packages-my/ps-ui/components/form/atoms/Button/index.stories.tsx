import { css } from '@emotion/react';
import disableDefaultArgs from '@ps/ui/.storybook/utils/disable-default-args';
import Block from '@ps/ui/components/content/atoms/Block';
import theme from '@ps/ui/styles/theme';

// import { action } from '@storybook/addon-actions';
import Comp from '.';
import styles from './styles';

export default {
  component: Comp,
  parameters: {
    docs: {
      description: {
        component: `
Try :hover, then :focus on both light/dark variants. Try alternative variants.
        `,
      },
      source: {
        code: `
        `,
      },
    },
  },
};

const s = {
  container: `padding: 1rem;`,
  label: `padding: 0.125rem 0 0.25rem;`,
  content: `padding: 1rem;`,
};
const Template = (args: any) => (
  <div>
    <Block ss={[s.container, 'background:white;']}>
      <Block as="sup" ss={s.label} variant="gradientText">
        onLight:
      </Block>
      <Block ss={s.content}>
        <Comp {...args} variant={args.variant} />
      </Block>
    </Block>
    <Block variant="gradientBg onDark" ss={s.container}>
      <Block as="sup" ss={s.label} variant="gradientText onDark">
        onDark:
      </Block>
      <Block ss={s.content}>
        <Comp {...args} variant={args.variant + ' onDark'} />
      </Block>
    </Block>
  </div>
);

export const Button = Template.bind({});
Button.argTypes = {
  ...disableDefaultArgs,
  variants: {
    control: {
      type: 'multi-select',
    },
    options: Object.keys(styles), // Automatically inferred when 'options' is defined
  },
};
Button.args = {
  variants: ['default'],
  children: 'Submit',
};
