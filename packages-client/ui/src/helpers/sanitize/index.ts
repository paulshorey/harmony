const sanitize_string = (v: string) => v.trim();

const sanitize_object = (obj: Record<string, any>, ignore: string[]) => {
  const copy = { ...obj };

  Object.entries(copy).forEach(([k, v]) => {
    if (ignore.includes(k)) {
      return;
    }

    if (typeof v === 'string') {
      copy[k] = sanitize_string(v);
      return;
    }

    if (Array.isArray(v)) {
      copy[k] = sanitize_array(v, ignore);
      return;
    }

    if (typeof v === 'object') {
      copy[k] = sanitize_object(v, ignore);
      return;
    }
  });

  return copy;
};

const sanitize_array: any = (arr: any[], ignore: string[]) => {
  return arr.map((i) => {
    if (typeof i === 'string') {
      return sanitize_string(i);
    }

    if (Array.isArray(i)) {
      return sanitize_array(i, ignore);
    }

    if (typeof i === 'object') {
      return sanitize_object(i, ignore);
    }

    return i;
  });
};

/**
 * Sanitize an object that contains string, obj, arr, or number;
 *
 * Will remove leading and trailing spaces from all types.
 */
export const sanitize = sanitize_object;
