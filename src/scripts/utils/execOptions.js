"use strict";

const execOptions = (config) => (keys) => (...args) => {
  Object.entries(config).forEach(([key, func]) => {
    if (keys.includes(key)) {
      func(args);
    }
  });
};

module.exports = execOptions;
