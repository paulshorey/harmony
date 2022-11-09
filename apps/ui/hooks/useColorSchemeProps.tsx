import React, { useEffect, useState } from 'react';
/**
 * Modify data- attributes so CSS can "Cascade" (add light/dark colors based on parents and grandparents)
 */
export default (props) => {
  //
  const [bgcolor, set_bgcolor] = useState(props.bgcolor);
  const [bggradient, set_bggradient] = useState(props.bggradient);
  const [textcolor, set_textcolor] = useState(props.textcolor);
  const [textgradient, set_textgradient] = useState(props.textgradient);
  const [colorscheme, set_colorscheme] = useState(props.colorscheme);
  useEffect(() => {
    //
  }, [bgcolor, bggradient, textcolor, textgradient]);

  //
  if (bgcolor || bggradient) {
    props['data-bgcolor'] = bgcolor || bggradient;
    if (bggradient) {
      props['data-bggradient'] = true;
    }
  }
  if (textcolor || textgradient) {
    props['data-textcolor'] = textcolor || textgradient;
    if (textgradient) {
      props['data-textgradient'] = true;
    }
  }
  if (props['data-textcolor'] === 'light') {
    props['data-colorscheme'] = 'dark';
  } else if (props['data-textcolor'] === 'dark') {
    props['data-colorscheme'] = 'light';
  } else if (props['data-bgcolor'] === 'light') {
    props['data-colorscheme'] = 'light';
  } else if (props['data-bgcolor'] === 'dark') {
    props['data-colorscheme'] = 'dark';
  } else if (props['data-bggradient'] === 'light') {
    props['data-colorscheme'] = 'light';
  } else if (props['data-bggradient'] === 'dark') {
    props['data-colorscheme'] = 'dark';
  }
};
