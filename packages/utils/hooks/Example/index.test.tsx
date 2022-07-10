import { render } from '@testing-library/react';

import useSayHello from '.';

const renderComponent = () => {
  const Wrapper = () => {
    const { sayHello } = useSayHello();

    return <div data-testid="hi">{sayHello({ name: 'Robert' })}</div>;
  };
  return {
    ...render(<Wrapper />),
  };
};

describe('SayHello - default', () => {
  it('Works', async () => {
    const { getByTestId } = renderComponent();

    expect(getByTestId('hi')).toHaveTextContent('Hello, Robert!');
  });
});
