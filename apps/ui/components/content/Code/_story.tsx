import Code from '.';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
export default (props) => (
  <CanvasContainer>
    <Code {...props} />
  </CanvasContainer>
);

export const code = `import Code from '@ps/ui/components/content/Code';

<Code 
  {...props}
  code={\`import React, { useState } from "react"; ...\`}
  language="jsx"
/>
`;
