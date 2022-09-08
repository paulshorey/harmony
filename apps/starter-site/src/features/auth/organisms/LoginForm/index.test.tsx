import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { act, fireEvent, render, waitFor } from 'src/test-utils/index';

import LoginForm, { Props } from '.';

const logIn = jest.fn();
const validateEmail = jest.fn();
const authError = null;
const firstName = null;

afterEach(() => {
  jest.clearAllMocks();
});

const renderComponent = (props: Partial<Props>) => {
  const DEFAULT_PROPS = {
    authError,
    firstName,
    logIn,
    // @ts-ignore
    validateEmail,
  };

  const Component = () => {
    return (
      <LoginForm
        {...DEFAULT_PROPS}
        // @ts-ignore
        validateEmail={validateEmail}
      />
    );
  };

  return {
    ...render(<Component />),
    props: {
      ...DEFAULT_PROPS,
      ...props,
    },
  };
};

describe('LogIn Page', () => {
  it('loads without errors', () => {
    const { getByTestId } = renderComponent({});
    // Initial fields showing
    expect(getByTestId('form-login')).toBeInTheDocument();
    expect(getByTestId('input-email')).toBeInTheDocument();
    expect(getByTestId('input-password')).toBeInTheDocument();
  });

  it('next button is disabled on initial load', () => {
    const { getByTestId } = renderComponent({});
    // Next is disabled
    expect(getByTestId('button-next')).toBeInTheDocument();
    expect(getByTestId('button-next')).toBeDisabled();
  });

  it('Failed email validation shows error message if invalid', async () => {
    const { getByTestId, queryByTestId } = renderComponent({});

    await act(async () => {
      expect(queryByTestId('error-email')).not.toBeInTheDocument();
      // Failed email
      const emailInput = getByTestId('input-email');
      await waitFor(() =>
        fireEvent.change(emailInput, { target: { value: 'badEmail' } })
      );
      emailInput.blur();

      // Error message is shown
      expect(getByTestId('error-email')).toBeInTheDocument();
    });
  });

  it('Next button is enabled if all fields are valid', async () => {
    const { getByTestId } = renderComponent({});

    await act(async () => {
      expect(getByTestId('button-next')).toBeDisabled();
      // Fill email
      fireEvent.change(getByTestId('input-email'), {
        target: { value: 'good@123.com' },
      });
      await waitFor(() =>
        validateEmail.mockReturnValueOnce({ result: 'success' })
      );
      // Fill password
      fireEvent.change(getByTestId('input-password'), {
        target: { value: '12345678' },
      });
      expect(getByTestId('button-next')).not.toBeDisabled();
      fireEvent.click(getByTestId('button-next'));
      expect(logIn).toBeCalledTimes(1);
    });
  });
});
