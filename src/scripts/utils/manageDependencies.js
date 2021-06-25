'use strict'

const addDependencies = require('./addDependencies')
const logger = require('./logger')

function prepareListOfPackagesToInstall(packageDetails) {
  return packageDetails.map(
    ([packageName, details]) => `${packageName}@~${details.version}`,
  )
}

function manageDependencies(dependencies, options) {
  logger.info('Start install dependencies')

  const allPackages = dependencies.flatMap(dependency =>
    Object.entries(dependency),
  )

  const packageTypeSave = ['--save'].concat(
    prepareListOfPackagesToInstall(
      allPackages.filter(([packageName, details]) => details.type === '--save'),
    ),
  )

  const packageTypeSaveDev = ['--save-dev'].concat(
    prepareListOfPackagesToInstall(
      allPackages.filter(
        ([packageName, details]) => details.type === '--save-dev',
      ),
    ),
  )

  addDependencies([...packageTypeSaveDev, ...packageTypeSave], options.verbose)

  logger.info('Dependencies was installed')
}

module.exports = manageDependencies
