'use strict';

/**
 * Tell me more
 */
module.exports = function(tmm) {
  let message = 'Tell me more';
  if (tmm) {
    message = tmm;
  }
  return message;
}