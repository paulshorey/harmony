import SelectAdd, { Props as SelectAddProps } from '.';
import React from 'react';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import CanvasStoryPadding from '@ps/ui/.storybook/components/CanvasStoryPadding';
import useShowStorybookCode from '@ps/ui/hooks/useShowStorybookCode';

const style = {
  margin: '0 0.875rem 0.875rem 0',
  minWidth: '10rem',
  width: '45%',
};

const DemoOne = (props: SelectAddProps) => (
  <SelectAdd {...props} style={style} />
);
export default (props) => {
  useShowStorybookCode();
  return (
    <CanvasContainer>
      <CanvasStoryPadding>
        <DemoOne {...props} />
      </CanvasStoryPadding>
      <CanvasStoryPadding bgcolor="light" textcolor="dark">
        <DemoOne {...props} />
      </CanvasStoryPadding>
    </CanvasContainer>
  );
};

export const code = `import SelectAdd, { Props as SelectAddProps } from '@ps/ui/components/SelectAdd';

<SelectAdd
  style={style}
  showSearch
  placeholder="Select a person"
  addPlaceholder="Add new person"
  values={['Jack', 'Lucy', 'Tom']}
/>`;
