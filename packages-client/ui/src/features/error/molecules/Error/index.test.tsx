import { MockedProvider } from '@apollo/client/testing';
import React from 'react';
import { render } from 'src/test-utils/index';

import Error from '.';

const onClick = jest.fn();

const renderComponent = ({ mocks }: { mocks?: any }) => {
  const Component = () => {
    return (
      <MockedProvider addTypename={false} mocks={mocks}>
        <Error
          buttonText="Go to home"
          icon="error"
          onClick={onClick}
          subtitle="Please try again later"
          title="Something went wrong"
        />
      </MockedProvider>
    );
  };

  return {
    ...render(<Component />),
  };
};

describe('Error - default', () => {
  it('Renders on initial load', () => {
    const { getByTestId } = renderComponent({
      mocks: [],
    });

    expect(getByTestId('error-container')).toBeInTheDocument();
    expect(getByTestId('error-text')).toBeInTheDocument();
  });
});
