"use strict";

const addDependencies = require("./addDependencies");
const logger = require("./logger");

function manageDependencies(moduleName, dependencies, options) {
  logger.info(`Start install ${moduleName} dependencies`);

  addDependencies(
    Object.entries(dependencies).map(([name, version]) => `${name}@${version}`),
    "--save-dev",
    options.verbose
  );

  logger.info(`${moduleName} dependencies wa installed`);
}

module.exports = manageDependencies;
