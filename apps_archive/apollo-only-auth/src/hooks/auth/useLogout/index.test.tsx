import '@testing-library/jest-dom/extend-expect';

import { MockedProvider } from '@apollo/client/testing';
import { waitFor } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks';
import React from 'react';

import useLogout from '.';
import { APOLLO_LOGOUT_USER, APOLLO_LOGOUT_USER_FAIL } from './mocks';

const wrapper = ({ children, mocks }: any) => (
  <MockedProvider addTypename={false} mocks={mocks}>
    {children}
  </MockedProvider>
);

describe('Hook: useLogout', () => {
  it('initializes logout function', async () => {
    const { result } = renderHook(() => useLogout(), { wrapper });

    expect(result.current.logout).not.toBe(undefined);
    expect(typeof result.current.logout).toBe('function');
  });

  it('successfully logout user', async () => {
    const { result } = renderHook(() => useLogout(), {
      initialProps: {
        mocks: APOLLO_LOGOUT_USER,
      },
      wrapper,
    });

    await act(async () => {
      expect(() => result.current.logout()).not.toThrow();
    });
  });

  it('Works if error is thrown', async () => {
    const { result } = renderHook(() => useLogout(), {
      initialProps: {
        mocks: APOLLO_LOGOUT_USER_FAIL,
      },
      wrapper,
    });

    await act(async () => {
      const responseResult = result.current.logout();

      await waitFor(() => {
        expect(responseResult).toThrowError;
        expect(responseResult).not.toBe(undefined);
      });
    });
  });
});
