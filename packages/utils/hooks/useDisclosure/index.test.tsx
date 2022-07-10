import '@testing-library/jest-dom/extend-expect';

import { act, renderHook } from '@testing-library/react-hooks';

import delay from '../../testing/delay';
import useDisclosure from '.';

describe('Hook: useDisclosure', () => {
  it('defaults to closed view on init ', () => {
    const { result } = renderHook(() => useDisclosure({}));
    expect(result.current.isOpen).toBe(false);
  });

  it('respects initial state', () => {
    const { result } = renderHook(() => useDisclosure({ isOpen: true }));
    expect(result.current.isOpen).toBe(true);
  });

  it('can toggle between open states', async () => {
    const { result } = renderHook(() => useDisclosure({}));

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
    const { result } = renderHook(() => useDisclosure({}));

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
    const { result } = renderHook(() => useDisclosure({}));
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
