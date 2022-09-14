let debouncedTimeouts = {};
let debouncedTimeoutsWaiting = {};
export const debounce = (func, delay, { id = 'n0', throttle = false, dontWait = false } = {}) => {
  return (...args) => {
    // abort if already exists
    if (dontWait && debouncedTimeoutsWaiting[id]) {
      return;
    }
    // always clear old timeouts
    window.clearTimeout(debouncedTimeouts[id]);
    /*
     * Pass throttle:true to make this act like a throttle function
     */
    // fire now
    if (throttle) {
      debouncedTimeoutsWaiting[id] = false;
      func.apply(null, args);
      return;
    }
    /*
     * By default, this acts like a normal debounce function
     */
    // fire later
    debouncedTimeoutsWaiting[id] = true;
    debouncedTimeouts[id] = window.setTimeout(() => {
      debouncedTimeoutsWaiting[id] = false;
      func.apply(null, args);
    }, delay);
  };
};

export const throttle = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};

/*
 * BELOW IS EXPERIMENTAL, NOT USED ANYWHERE YET
 * Attempting to avoid conflicting timeouts. These functions will make sure that a new timeout will not be created if an existing one is still running.
 */
// const uniqueTimeouts = {};
// export const uniqueTimeout = function (fn, time, id = 0) {
//   if (!uniqueTimeouts[id]) {
//     uniqueTimeouts[id] = setTimeout(() => {
//       fn();
//       uniqueTimeouts[id] = null;
//     }, time);
//   }
// };
// export const cancelTimeout = function (id = 0) {
//   if (typeof id !== 'number' && typeof id !== 'string') {
//     return;
//   }
//   clearTimeout(uniqueTimeouts[id]);
//   uniqueTimeouts[id] = null;
// };
// const uniqueIntervals = {};
// export const uniqueInterval = function (fn, time, id = 0) {
//   if (!uniqueIntervals[id]) {
//     uniqueIntervals[id] = setInterval(() => {
//       fn();
//       uniqueIntervals[id] = null;
//     }, time);
//   }
// };
// export const cancelInterval = function (id = 0) {
//   if (typeof id !== 'number' && typeof id !== 'string') {
//     return;
//   }
//   clearInterval(uniqueIntervals[id]);
//   uniqueIntervals[id] = null;
// };
