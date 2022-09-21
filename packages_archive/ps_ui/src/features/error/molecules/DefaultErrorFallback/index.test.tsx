import { MockedProvider } from '@apollo/client/testing';
import React from 'react';
import { fireEvent, render } from 'src/test-utils/index';
import RouterMock from 'src/test-utils/RouterMock';

import DefaultErrorFallback from '.';

const push = jest.fn();

const renderComponent = ({ mocks }: { mocks?: any }) => {
  const Component = () => {
    return (
      <MockedProvider addTypename={false} mocks={mocks}>
        <RouterMock values={{ push }}>
          <DefaultErrorFallback />
        </RouterMock>
      </MockedProvider>
    );
  };

  return {
    ...render(<Component />),
  };
};

describe('DefaultErrorFallback - default', () => {
  it('Renders on initial load', () => {
    const { getByTestId } = renderComponent({
      mocks: [],
    });

    expect(getByTestId('error-text')).toBeInTheDocument();
    expect(getByTestId('button-go-to-home-page')).toBeInTheDocument();
  });

  it('redirects to home page on button click', async () => {
    const { getByTestId } = renderComponent({
      mocks: [],
    });

    fireEvent.click(getByTestId('button-go-to-home-page'));

    expect(push).toHaveBeenCalledWith('/home');
  });
});
