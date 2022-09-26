import { css } from '@emotion/react';
import disableDefaultArgs from '@ps/ui/.storybook/utils/disable-default-args';

import Gradient from '.';

export default {
  title: 'content/GradientBackground',
  component: Gradient,
  argTypes: {
    ...disableDefaultArgs,
  },
  parameters: {
    docs: {
      description: {
        component: `This is a \`<Gradient>\` inside a \`<Card>\`. Because the background for all these Storybook components is also a default \`<Gradient>\` component.
        
Use the props to change gradient colors/direction/style. Pass a variant to choose from predefined styles. Work in progreess.
        `,
      },
    },
  },
};

const Template = (args: any) => <Gradient {...args} />;

export const GradientBackground = Template.bind({});
GradientBackground.args = {
  children: (
    <div
      css={css`
        padding: 100px;
        border: 2px solid white;
        border-radius: 25px;
      `}
    >
      Try changing the `variants` prop to see different gradient styles.
    </div>
  ),
};
