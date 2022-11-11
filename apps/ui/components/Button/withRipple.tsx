import React, { createRef } from 'react';

const withRipple = ({ children }) => {
  let timerId;
  const ref = createRef() as React.RefObject<HTMLSpanElement>;
  return (
    <span
      ref={ref}
      role="none"
      onMouseDown={(e) => {
        console.log('mouse down e', e);
        if (!ref || !ref.current) {
          return;
        }
        console.log('mouse down ref.current', ref.current);
        clearTimeout(timerId);
        const ripple = ref.current.querySelector('.withRipple');
        if (!ripple) {
          return;
        }
        console.log('mouse down ripple', ripple);
        const size = ref.current.offsetWidth;
        const pos = ref.current.getBoundingClientRect();
        const x = e.pageX - pos.left - size;
        const y = e.pageY - pos.top - size;
        ripple.style =
          'top:' +
          y +
          'px; left:' +
          x +
          'px; width: ' +
          size * 2 +
          'px; height: ' +
          size * 2 +
          'px;';
        ripple.classList.remove('withRipple_active');
        ripple.classList.remove('withRipple_start');
        setTimeout(() => {
          ripple.classList.add('withRipple_start');
          setTimeout(() => {
            ripple.classList.add('withRipple_active');
          });
        });
      }}
      onMouseUp={(e) => {
        console.log('mouse up e', e);
        console.log('mouse up ref.current', ref.current);
        const ripple = e.target.querySelector('.withRipple');
        if (!ripple) {
          return;
        }
        console.log('mouse up ripple', ripple);
        clearTimeout(timerId);
        timerId = setTimeout(() => {
          ripple.classList.remove('withRipple_active');
          ripple.classList.remove('withRipple_start');
        }, 500);
      }}
    >
      <span className="withRipple" />
      {children}
    </span>
  );
};
export default withRipple;
