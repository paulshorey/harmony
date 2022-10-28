import React from 'react';
import Modal from '.';
import Button from '@ps/ui/components/focus/Button';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';

import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import { Space } from 'antd';

export default (args: any) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <CanvasContainer data-bggradient="light" data-textcolor="dark">
      {/* <p>Accessible and ADA and WCAG Compliant!</p> */}
      <p>
        <input placeholder="Hit Tab key to focus inside each field on this page." />
      </p>
      <p>
        <textarea>
          Ideally, the focus should be trapped inside the modal while the modal
          is opened. Hitting tab should navigate the form fields inside the
          modal.
        </textarea>
      </p>
      <p>
        <Space>
          <HomeOutlined />
          <SettingFilled />
          <SmileOutlined />
          <SyncOutlined spin />
          <SmileOutlined rotate={180} />
          <LoadingOutlined />
        </Space>
      </p>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        {...args}
      >
        <h2>Hello! This title is inside a modal</h2>
        <p>This is not finished. Just started. Please check back soon.</p>
      </Modal>
      <p>
        <Button
          onClick={() => {
            setIsOpen(true);
          }}
          variant="primary"
        >
          Open modal
        </Button>
      </p>
      <p>
        <textarea>
          Then, after the modal has closed, the focus should be returned to the
          button that opened the modal.
        </textarea>
      </p>
      <p>
        <input placeholder="Another input field to test focus with." />
      </p>
      {/* <p>
        At least that's the goal. When you navigate a form on a webpage by
        hitting TAB, then a modal opens, you should be able to (1) close the
        modal by hitting ESC or TAB. Then (2) after the moal is closed, you
        should be able to continue navigating using TAB/keyboard from where you
        left off. Most modals reset the page, so you have to hit tab from the
        top of the page again to get back to tediously find where you were in
        the form.
      </p> */}
    </CanvasContainer>
  );
};
