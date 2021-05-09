"use strict";

const manageDependencies = require("./utils/manageDependencies");
const execOptions = require("./utils/execOptions");
const logger = require("./utils/logger");
const merge = require("deepmerge");
const path = require("path");
const touch = require("./utils/touchProjectConfig");

const MODULES = require("./modules");

const babelDefaultConfig = require("../config/babel/babel.config");
const babelReactDefaultConfig = require("../config/babel/babel-react.config");

const CONFIG_FILENAME = "babel.config.js";

function createConfig(config, options) {
  logger.info("Start building the " + CONFIG_FILENAME);

  let babelConfig = babelDefaultConfig;

  if (options.isReact) {
    babelConfig = merge(babelConfig, babelReactDefaultConfig);
  }

  const projectBabelConfig = config !== undefined ? config : {};

  if (projectBabelConfig["presets"]) {
    babelConfig.presets = babelConfig.presets.concat(
      projectBabelConfig["presets"]
    );
  }

  if (projectBabelConfig["plugins"]) {
    babelConfig.plugins = babelConfig.plugins.concat(
      projectBabelConfig["plugins"]
    );
  }

  const content = touch(
    options.projectRootDir + path.sep + CONFIG_FILENAME,
    babelConfig
  );
  options.verbose && logger.debug(CONFIG_FILENAME, content);

  logger.info(CONFIG_FILENAME + " was built");
}

function setDependencies(options) {
  let babelDependencies = require("../packages/babel").base;

  if (options.enabledModules.includes(MODULES.REACT)) {
    babelDependencies = merge(
      babelDependencies,
      require("../packages/babel").react
    );
  }

  manageDependencies("babel", babelDependencies, options);
}

function babel(config, options) {
  setDependencies(options);
  createConfig(config, options);
}

module.exports = babel;
