export function getElement(expr) {
  return (typeof expr === 'string') ? document.querySelector(expr) : expr;
}

export function getComputedStyle(el, key) {
  var computedStyle = window.getComputedStyle(el);
  return computedStyle[key] || '';
}

// Easing Equations (c) 2003 Robert Penner, all rights reserved.
// Open source under the BSD License.
export function easeOutCubic(pos) {
  return (Math.pow((pos - 1), 3) + 1);
}

export function easeInOutCubic(pos) {
  if ((pos /= 0.5) < 1) {
    return 0.5 * Math.pow(pos, 3);
  }
  return 0.5 * (Math.pow((pos - 2), 3) + 2);
}

/**
 * Array#filter(github.com/juliangruber/array-filter)
 * @param {Array} arr
 * @param {Function} fn
 * @param {Object=} self
 * @return {Array}
 * @throw TypeError
 */
export function arrayFilter(arr, fn, self) {
  if (arr.filter) return arr.filter(fn, self);
  if (void 0 === arr || arr === null) throw new TypeError();
  if (typeof fn !== 'function') throw new TypeError();
  var ret = [];
  for (var i = 0; i < arr.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(arr, i)) continue;
    var val = arr[i];
    if (fn.call(self, val, i, arr)) ret.push(val);
  }
  return ret;
}
