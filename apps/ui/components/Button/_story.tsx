import React from 'react';
import { withButton } from '.';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import CanvasStoryPadding from '@ps/ui/.storybook/components/CanvasStoryPadding';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import useShowStorybookCode from '@ps/ui/hooks/useShowStorybookCode';

export const Buttons = (props) => {
  useShowStorybookCode();
  const Button = withButton({
    size: 'sm',
    ...props,
    ss: 'margin: 0 0.875rem 0.875rem 0;',
  });
  return (
    <>
      <Button
        className="noWrap"
        loading
        icon={<FontAwesomeIcon icon={faUser} />}
      >
        Loading
      </Button>
      <Button variant="outlined" icon={<FontAwesomeIcon icon={faUser} />}>
        Outlined
      </Button>
      <Button variant="text" icon={<FontAwesomeIcon icon={faUser} />}>
        Text
      </Button>
      <Button round icon={<FontAwesomeIcon icon={faUser} />} />
    </>
  );
};
export default (props) => (
  <>
    <CanvasContainer>
      <CanvasStoryPadding
        data-bgcolor="light"
        data-textcolor="purple"
        data-bggradient
      >
        <Buttons {...props} />
      </CanvasStoryPadding>
      <CanvasStoryPadding
        data-bgcolor="purple"
        data-textcolor="light"
        data-bggradient
      >
        <Buttons {...props} />
      </CanvasStoryPadding>
    </CanvasContainer>
  </>
);

export const code = ``;
