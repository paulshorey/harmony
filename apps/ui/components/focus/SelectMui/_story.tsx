import * as React from 'react';
import SelectMui from '.';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import CanvasStoryPadding from '@ps/ui/.storybook/components/CanvasStoryPadding';
import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';

function SelectStory() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return <SelectMui value={age} label="Age" onChange={handleChange} />;
}

export default (props) => (
  <CanvasContainer>
    <CanvasStoryPadding>
      <SelectStory {...props} />
    </CanvasStoryPadding>
    <CanvasStoryPadding bgcolor="light" textcolor="purple">
      <SelectStory {...props} />
    </CanvasStoryPadding>
  </CanvasContainer>
);

export const code = ``;
