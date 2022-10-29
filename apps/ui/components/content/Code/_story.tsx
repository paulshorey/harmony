import Code from '.';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import CanvasStoryPadding from '@ps/ui/.storybook/components/CanvasStoryPadding';

export default (props) => (
  <CanvasContainer>
    <CanvasStoryPadding>
      <Code {...props} />
    </CanvasStoryPadding>
  </CanvasContainer>
);

export const code = `import Code from '@ps/ui/components/content/Code';

<Code 
  {...props}
  code={\`import React, { useState } from "react"; ...\`}
  language="jsx"
/>
`;
