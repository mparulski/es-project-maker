'use strict'

const isComparedVersionIsNewerThanInstalled = require('./isComparedVersionIsNewerThanInstalled')
const addDependencies = require('./addDependencies')
const logger = require('./logger')
const readPackageJson = require('./readPackageJson')

function getInstalledPackages(packageJson) {
  let installedProdPackages = new Map()
  if (packageJson['dependencies'] !== undefined) {
    installedProdPackages = new Map(Object.entries(packageJson['dependencies']))
  }

  let installedDevPackages = new Map()
  if (packageJson['devDependencies'] !== undefined) {
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

  return isComparedVersionIsNewerThanInstalled(
    packageDetails.version,
    installedPackageVer,
  )
}

function prepareListOfPackagesToInstall(packageDetails) {
  return packageDetails.map(
    ([packageName, details]) => `${packageName}@~${details.version}`,
  )
}

function isNotEmpty(arr) {
  return Array.isArray(arr) && arr.length > 0
}

function manageDependencies(dependencies, args, runtimeOptions) {
  logger.info('Start install dependencies')

  const allPackages = dependencies.flatMap(dependency =>
    Object.entries(dependency),
  )

  const installedPackages = getInstalledPackages(
    readPackageJson(runtimeOptions),
  )

  const packageTypeProd = prepareListOfPackagesToInstall(
    allPackages
      .filter(([packageName, details]) => details.type === '--save')
      .filter(([packageName, details]) =>
        filterPackagesVersion(packageName, details, installedPackages),
      ),
  )

  logger.debug('"dependencies"" to install:', packageTypeProd)

  isNotEmpty(packageTypeProd) &&
    addDependencies(packageTypeProd, '--save-prod', args.verbose)

  const packageTypeDev = prepareListOfPackagesToInstall(
    allPackages
      .filter(([packageName, details]) => details.type === '--save-dev')
      .filter(([packageName, details]) =>
        filterPackagesVersion(packageName, details, installedPackages),
      ),
  )

  logger.debug('"devDependencies"" to install:', packageTypeDev)

  isNotEmpty(packageTypeDev) &&
    addDependencies(packageTypeDev, '--save-dev', args.verbose)

  logger.info('Dependencies was installed')
}

module.exports = manageDependencies
