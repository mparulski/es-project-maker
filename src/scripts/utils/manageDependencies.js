'use strict'

const semver = require('semver')
const addDependencies = require('./addDependencies')
const logger = require('./logger')
const readPackageJson = require('./readPackageJson')

function getInstalledPackages(packageJson) {
  let installedProdPackages = new Map()
  if (packageJson['dependencies'] !== null) {
    installedProdPackages = new Map(Object.entries(packageJson['dependencies']))
  }

  let installedDevPackages = new Map()
  if (packageJson['devDependencies'] !== null) {
    installedDevPackages = new Map(
      Object.entries(packageJson['devDependencies']),
    )
  }

  return new Map([...installedProdPackages, ...installedDevPackages])
}

function filterPackagesVersion(packageName, packageDetails, installedPackages) {
  if (!installedPackages.has(packageName)) {
    return true
  }

  const installedPackageVer = installedPackages.get(packageName)

  return semver.gt(packageDetails.version, installedPackageVer)
}

function prepareListOfPackagesToInstall(packageDetails) {
  return packageDetails.map(
    ([packageName, details]) => `${packageName}@~${details.version}`,
  )
}

function isNotEmpty(arr) {
  return Array.isArray(arr) && arr.length > 0
}

function manageDependencies(dependencies, options) {
  logger.info('Start install dependencies')

  const allPackages = dependencies.flatMap(dependency =>
    Object.entries(dependency),
  )

  const installedPackages = getInstalledPackages(readPackageJson(options))

  const packageTypeProd = prepareListOfPackagesToInstall(
    allPackages
      .filter(([packageName, details]) => details.type === '--save')
      .filter(([packageName, details]) =>
        filterPackagesVersion(packageName, details, installedPackages),
      ),
  )

  options.verbose &&
    logger.debug('"dependencies"" to install:', packageTypeProd)

  isNotEmpty(packageTypeProd) &&
    addDependencies(packageTypeProd, '--save-prod', options.verbose)

  const packageTypeDev = prepareListOfPackagesToInstall(
    allPackages
      .filter(([packageName, details]) => details.type === '--save-dev')
      .filter(([packageName, details]) =>
        filterPackagesVersion(packageName, details, installedPackages),
      ),
  )

  options.verbose &&
    logger.debug('"devDependencies"" to install:', packageTypeDev)

  isNotEmpty(packageTypeDev) &&
    addDependencies(packageTypeDev, '--save-dev', options.verbose)

  logger.info('Dependencies was installed')
}

module.exports = manageDependencies
