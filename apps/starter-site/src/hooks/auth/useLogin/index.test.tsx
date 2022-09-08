import '@testing-library/jest-dom/extend-expect';

import { MockedProvider } from '@apollo/client/testing';
import { act, renderHook } from '@testing-library/react-hooks';
import React from 'react';

import buildDeviceId from '../../../helpers/buildDeviceId';
import useLogin from '.';
import { APOLLO_SIGN_IN_USER, APOLLO_SIGN_IN_USER_ERROR } from './mocks';

const wrapper = ({ children, mocks }: any) => (
  <MockedProvider addTypename={false} mocks={mocks}>
    {children}
  </MockedProvider>
);

describe('Hook: useLogin', () => {
  it('initializes useLogin hook', async () => {
    const { result } = renderHook(() => useLogin(), { wrapper });

    expect(result.current.loading).toBe(false);
    expect(result.current.login).not.toBe(undefined);
  });

  it('returns valid data', async () => {
    const deviceId = buildDeviceId();

    const { result } = renderHook(() => useLogin(), {
      initialProps: {
        mocks: APOLLO_SIGN_IN_USER(deviceId),
      },
      wrapper,
    });

    await act(async () => {
      const data = await result.current.login({
        deviceId,
        password: 'Pa$$w0rd',
        username: 'user@user.eu',
      });

      expect(typeof data.admin).toBe('boolean');
      expect(typeof data.manager).toBe('boolean');
      expect(typeof data.success).toBe('boolean');
      expect(typeof data.token).toBe('string');
    });
  });

  it('works if error is thrown', async () => {
    const deviceId = buildDeviceId();
    const { result } = renderHook(() => useLogin(), {
      initialProps: {
        mocks: APOLLO_SIGN_IN_USER_ERROR(deviceId),
      },
      wrapper,
    });

    await act(async () => {
      const data = await result.current.login({
        deviceId,
        password: 'Pa$$w0rd',
        username: 'user@user.eu',
      });

      expect(result.current.loading).toBe(false);
      expect(data.success).toBe(false);
    });
  });
});
