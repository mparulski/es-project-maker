'use strict'

const addDependencies = require('./addDependencies')
const logger = require('./logger')

function manageDependencies(dependencies, options) {
  logger.info('Start install dependencies')

  addDependencies(
    Object.values(dependencies).flatMap(dependency =>
      Object.entries(dependency).map(([name, version]) => `${name}@${version}`),
    ),
    '--save-dev',
    options.verbose,
  )

  logger.info('Dependencies was installed')
}

module.exports = manageDependencies
