import { css } from '@emotion/react';
import disableDefaultArgs from '@ps/ui/.storybook/utils/disable-default-args';

import Comp from '.';

export default {
  component: Comp,
  argTypes: {
    ...disableDefaultArgs,
  },
  parameters: {
    docs: {
      description: {
        component: `This is a \`<GradientBackground>\` inside a \`<Card>\`. Because the background for all these Storybook components is also a default \`<GradientBackground>\` component.
        
Use the props to change gradient colors/direction/style. Pass a variant to choose from predefined styles. Work in progreess.
        `,
      },
    },
  },
};

const Template = (args: any) => <Comp {...args} />;

export const GradientBackground = Template.bind({});
GradientBackground.args = {
  children: (
    <div
      css={css`
        &,
        & > * {
          color: white;
        }
        padding: 100px;
        border: 2px solid white;
        border-radius: 25px;
      `}
    >
      Try changing the `variants` prop to see different gradient styles.
    </div>
  ),
};
