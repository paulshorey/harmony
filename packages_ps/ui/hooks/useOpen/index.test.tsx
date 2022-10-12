import '@testing-library/jest-dom/extend-expect';

import { act, renderHook } from '@testing-library/react-hooks';

import delay from '../../testing/delay';
import useOpen from '.';

describe('Hook: useOpen', () => {
  it('defaults to closed view on init ', () => {
    const { result } = renderHook(() => useOpen({}));
    expect(result.current.isOpen).toBe(false);
  });

  it('respects initial state', () => {
    const { result } = renderHook(() => useOpen({ isOpen: true }));
    expect(result.current.isOpen).toBe(true);
  });

  it('can toggle between open states', async () => {
    const { result } = renderHook(() => useOpen({}));

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
    const { result } = renderHook(() => useOpen({}));

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
    const { result } = renderHook(() => useOpen({}));
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
