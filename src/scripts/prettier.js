"use strict";

const manageDependencies = require("./utils/manageDependencies");
const logger = require("./utils/logger");
const merge = require("deepmerge");
const path = require("path");
const touch = require("./utils/touchProjectConfig");
const execOptions = require("./utils/execOptions");
const MODULES = require("./modules");

const CONFIG_FILENAME = "prettier.js";

function createConfig(config, options) {
  logger.info("Start building the " + CONFIG_FILENAME);

  let prettierConfig = require("../config/prettier/base.prettier.config");

  const modulesConfig = {
    [MODULES.REACT]: () => {
      prettierConfig = merge(
        prettierConfig,
        require("../config/prettier/react.prettier.config")
      );
    },
  };

  execOptions(modulesConfig)(options.enabledModules)();

  if (config.options) {
    prettierConfig = merge(prettierConfig, config.options);
  }

  const content = touch(
    options.projectRootDir + path.sep + CONFIG_FILENAME,
    prettierConfig
  );

  options.verbose && logger.debug(CONFIG_FILENAME, content);

  logger.info(CONFIG_FILENAME + " was built");
}

function prettier(config, options) {
  manageDependencies("prettier", require("../packages/prettier"), options);
  createConfig(config, options);
}

module.exports = prettier;
