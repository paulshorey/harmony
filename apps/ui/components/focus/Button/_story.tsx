import React from 'react';
import Button, { withButton } from '.';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import CanvasStoryPadding from '@ps/ui/.storybook/components/CanvasStoryPadding';
import { UserOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export const Buttons = (props) => {
  const Button = withButton({
    size: 'sm',
    ss: 'margin: 0 0.875rem 0.875rem 0;',
    ...props,
  });
  return (
    <>
      <Button loading icon={<FontAwesomeIcon icon={faUser} />}>
        Loading
      </Button>
      <Button variant="outline" icon={<FontAwesomeIcon icon={faUser} />}>
        Outlined
      </Button>
      <Button variant="text" icon={<FontAwesomeIcon icon={faUser} />}>
        Text
      </Button>
      <Button round icon={<FontAwesomeIcon icon={faUser} />}>
        Round
      </Button>
      <Button
        round
        variant="primary"
        icon={<FontAwesomeIcon icon={faUser} />}
      />
    </>
  );
};
export default (props) => (
  <>
    <CanvasContainer>
      <CanvasStoryPadding bgcolor="light" textcolor="purple">
        <Buttons {...props} />
      </CanvasStoryPadding>
    </CanvasContainer>
    <CanvasContainer>
      <CanvasStoryPadding>
        <Button icon={<UserOutlined />} {...props} />
      </CanvasStoryPadding>
    </CanvasContainer>
  </>
);

export const code = ``;
