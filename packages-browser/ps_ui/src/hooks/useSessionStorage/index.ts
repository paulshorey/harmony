import { isJson } from '../../helpers/isJson';

type allowedSessionEntries = 'spiral_source' | 'spiral_history';

const useSessionStorage = () => {
  const isWindowAvailable = typeof window !== 'undefined';

  const get = (name: allowedSessionEntries) => {
    let item: string | null = null;

    if (isWindowAvailable) {
      item = window.sessionStorage.getItem(name);
    }

    if (item && isJson(item)) {
      return JSON.parse(item);
    }

    return item;
  };

  const set = (
    name: allowedSessionEntries,
    value: string | Record<string, any>
  ) => {
    if (isWindowAvailable) {
      if (typeof value === 'object') {
        window.sessionStorage.setItem(name, JSON.stringify(value));
      } else {
        window.sessionStorage.setItem(name, value);
      }
    }
  };

  const remove = (name: string) => {
    if (isWindowAvailable) {
      window.sessionStorage.removeItem(name);
    }
  };

  const clear = () => {
    if (isWindowAvailable) {
      window.sessionStorage.clear();
    }
  };

  return { clear, get, remove, set };
};

export default useSessionStorage;
