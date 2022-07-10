import React from 'react';

const useHello = () => {
  const [state] = React.useState('Hello');

  const sayHello = ({ name }: { name: string }) => {
    return `${state}, ${name}!`;
  };

  return { sayHello };
};

export default useHello;
