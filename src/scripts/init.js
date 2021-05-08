"use strict";

const logger = require("./utils/logger");
const isEnabled = require("./utils/isEnabledConfigOption");
const makeBabel = require("./babel");
const makePrettier = require("./prettier");
const makeWebpack = require("./webpack");
const path = require("path");
const execOptions = require("./utils/execOptions");
const MODULES = require("./modules");

function init(projectConfig, options) {
  options = {
    ...options,
    projectRootDir: process.cwd(),
    esProjectMakerScriptsDir: path.resolve(__dirname),
    enabledModules: Object.entries(MODULES)
      .filter(([key, val]) => isEnabled(projectConfig[val]))
      .map(([key, val]) => val),
  };

  options.verbose && logger.debug("Runtime options:" + JSON.stringify(options));

  const config = {
    [MODULES.BABEL]: ([projectConfig, options]) =>
      makeBabel(projectConfig[MODULES.BABEL], options),
    [MODULES.PRETTIER]: ([projectConfig, options]) =>
      makePrettier(projectConfig[MODULES.PRETTIER], options),
    [MODULES.WEBPACK]: ([projectConfig, options]) =>
      makeWebpack(projectConfig[MODULES.WEBPACK], options),
  };

  execOptions(config)(options.enabledModules)(projectConfig, options);
}

module.exports = init;
