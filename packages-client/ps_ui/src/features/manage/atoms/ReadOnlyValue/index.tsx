import React from 'react';

export type ReadOnlyProps = {
  value?: any;
};

const ReadOnly: React.FC<ReadOnlyProps> = (props) => {
  return <div {...props}>{JSON.stringify(props.value)}</div>;
};

export default ReadOnly;
