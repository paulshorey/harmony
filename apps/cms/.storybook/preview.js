import React from 'react';
import GlobalStyles from 'src/styles/global';
import AppProvider from 'src/components/organisms/AppProvider';
import { MockedProvider } from '@apollo/client/testing';
import 'public/css/reset.css';
import { WithApolloClient } from 'storybook-addon-apollo-client/dist/decorators';
import RouterMock from 'src/test-utils/RouterMock';
import { useToast } from 'src/context/toast';
import { useModal } from 'src/context/modal';
import Modal from 'src/components/molecules/Modal';
import mockdate from 'mockdate';

const withMockdate = (story, { parameters }) => {
  mockdate.reset();
  if (parameters.mockdate) {
    mockdate.set(parameters.mockdate);
  }
  return story();
};

const SUPPORTED_VIEWPORTS = {
  mobile: {
    name: 'iPhone X',
    styles: {
      width: '375px',
      height: '812px',
    },
  },
  tablet: {
    name: 'iPad',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  laptop: {
    name: 'Laptop',
    styles: {
      width: '1024px',
      height: '768px',
    },
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1440px',
      height: '1024px',
    },
  },
};

export const parameters = {
  layout: 'fullscreen', // to remove padding in body
  viewport: {
    viewports: SUPPORTED_VIEWPORTS,
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  apolloClient: {
    MockedProvider,
    addTypename: false,
  },
};

const ModalComponent = () => {
  const { isOpen, onClose, modalChildren } = useModal();

  return (
    <>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={onClose} showClose>
          {modalChildren}
        </Modal>
      )}
    </>
  );
};

const ToastsComponent = () => {
  const { Toasts } = useToast();

  return <Toasts />;
};

export const decorators = [
  WithApolloClient,
  withMockdate,
  (Story) => (
    <RouterMock>
      <AppProvider>
        <ModalComponent />
        <ToastsComponent />
        <GlobalStyles />
        <Story />
      </AppProvider>
    </RouterMock>
  ),
];
