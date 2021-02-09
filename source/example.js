/**
 * @typedef {Object} Food
 * @property {string} name - What the food should be called
 * @property {('meat' | 'veggie' | 'other')} type - The food's type
 */

'use strict';

const math = {
  sum: function(a, b) {
    return a + b;
  },
  diff: function(a, b) {
    return a - b;
  },
  product: function(a, b) {
    return a * b;
  },
};
module.exports = math;