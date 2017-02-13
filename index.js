'use strict';

/**
 * Tell me where
 */
module.exports = function(tmw) {
  let message = 'Tell me where';
  if (tmw) {
    message = tmw;
  }
  return message;
}