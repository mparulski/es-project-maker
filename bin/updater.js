#!/usr/bin/env node
'use strict'

const spawn = require('../src/scripts/utils/spawn')
const path = require('path')
const touchJSModule = require('../src/scripts/utils/touchJSModule')
const logger = require('../src/scripts/utils/logger')
const fs = require('fs')
const isComparedVersionIsNewerThanInstalled = require('../src/scripts/utils/isComparedVersionIsNewerThanInstalled')

function update() {
  const listOfUpgradedPackages = []

  fs.readdirSync(path.resolve(process.cwd(), 'src/packages')).forEach(file => {
    const list = checkAndUpdatePackages(path.resolve(process.cwd(), 'src/packages', file))
    listOfUpgradedPackages.push(...list)
  })

  if (listOfUpgradedPackages.length === 0) {
    logger.info('There are no packages to upgrade')
  } else {
    logger.info('Upgraded packages:')
    listOfUpgradedPackages.forEach(str => {
      logger.info(str)
    })
  }
}

function checkAndUpdatePackages(file) {
  const deps = require(file)
  const listOfUpgradedPackages = []

  Object.entries(deps).forEach(entry => {
    const [key, packages] = entry
    packages.forEach(pkg => {
      const packageName = Object.keys(pkg)[0]
      logger.info(`checking ${packageName}...`)

      const npmPackageVersion = getVersionFromNPM(packageName)
      const installedPackageVersion = pkg[packageName].version

      if (isComparedVersionIsNewerThanInstalled(npmPackageVersion, installedPackageVersion)) {
        pkg[packageName].version = npmPackageVersion
        listOfUpgradedPackages.push(`${packageName}: ${installedPackageVersion} -> ${npmPackageVersion}`)
      }
    })
  })

  touchJSModule(file, deps)

  return listOfUpgradedPackages
}

function getVersionFromNPM(packageName) {
  const proc = spawn.sync('npm', ['view', packageName, 'version'])

  return proc.stdout.toString().trim()
}

update()
