'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString.split(';');
  const result = {};

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line.includes(':')) {
      const parts = line.split(':');
      const key = parts[0].trim();
      const value = parts.slice(1).join(',\n').trim();

      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
