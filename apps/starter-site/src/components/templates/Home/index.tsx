import React, { useEffect } from 'react';

import style from './style';

const HomeTemplate = () => {
  useEffect(() => {
    setTimeout(() => {}, 1000);
  }, []);
  return <div css={style}>Home</div>;
};

export default HomeTemplate;
