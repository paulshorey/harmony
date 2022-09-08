import React from 'react';

type Props = {
  /**
   * A function to call after mount
   */
  callback?: () => void;
};

export const useMounted = (props?: Props): { hasMounted: boolean } => {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    if (props?.callback) {
      props.callback();
    }
  }, [props?.callback]);

  React.useEffect(() => {
    setHasMounted(true);

    return () => setHasMounted(false);
  }, []);

  return { hasMounted };
};
