import '@testing-library/jest-dom/extend-expect';

import { act, renderHook } from '@testing-library/react-hooks';

import delay from '../../testing/delay';
import { MenuProvider, useMenu } from '.';

const wrapper = ({ children, isOpen }: { children?: any; isOpen: boolean }) => {
  return <MenuProvider isOpen={isOpen}>{children}</MenuProvider>;
};

describe('Hook: useMenu', () => {
  it('defaults to closed view on init ', () => {
    const { result } = renderHook(() => useMenu(), { wrapper });
    expect(result.current.isOpen).toBe(false);
  });

  it('respects initial state', () => {
    const { result } = renderHook(() => useMenu(), {
      initialProps: {
        isOpen: true,
      },
      wrapper,
    });
    expect(result.current.isOpen).toBe(true);
  });

  it('can toggle between open states', async () => {
    const { result } = renderHook(() => useMenu(), { wrapper });

    await act(async () => {
      expect(result.current.isOpen).toBe(false);
      /**
       * Toggle open
       */
      result.current.onToggle();
      await delay();
      expect(result.current.isOpen).toBe(true);
      /**
       * Toggle closed
       */
      result.current.onToggle();
      await delay();
      expect(result.current.isOpen).toBe(false);
    });
  });

  it('onOpen works', async () => {
    const { result } = renderHook(() => useMenu(), { wrapper });

    await act(async () => {
      expect(result.current.isOpen).toBe(false);
      /**
       * Open
       */
      result.current.onOpen();
      await delay();
      expect(result.current.isOpen).toBe(true);
    });
  });

  it('onClose works', async () => {
    const { result } = renderHook(() => useMenu(), {
      initialProps: {
        isOpen: true,
      },
      wrapper,
    });
    /**
     * Close
     */
    await act(async () => {
      result.current.onClose();
      await delay();
      expect(result.current.isOpen).toBe(false);
    });
  });
});
