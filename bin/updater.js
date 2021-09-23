#!/usr/bin/env node
'use strict'

const spawn = require('../src/scripts/utils/spawn')
const path = require('path')
const touchJSModule = require('../src/scripts/utils/touchJSModule')
const logger = require('../src/scripts/utils/logger')
const fs = require('fs');
const isComparedVersionIsNewerThanInstalled = require('../src/scripts/utils/isComparedVersionIsNewerThanInstalled')

fs.readdirSync(path.resolve(process.cwd(), 'src/packages')).forEach(file => {
    checkAndUpdatePackages(path.resolve(process.cwd(), 'src/packages', file))
})

function checkAndUpdatePackages(file) {
    const deps = require(file)

    Object.entries(deps).forEach(entry => {
        const [key, packages] = entry;
        packages.forEach(pkg => {
            const packageName = Object.keys(pkg)[0];

            const npmPackageVersion = getVersionFromNPM(packageName)
            const installedPackageVersion = pkg[packageName].version

            if (isComparedVersionIsNewerThanInstalled(npmPackageVersion, installedPackageVersion)) {
                pkg[packageName].version = npmPackageVersion

                logger.info(`${packageName}: ${installedPackageVersion} -> ${npmPackageVersion}`)
            }
        })
    })

    touchJSModule(
        file,
        deps
    )
}

function getVersionFromNPM(packageName) {
    const proc = spawn.sync('npm', ['view', packageName, 'version'])

    return proc.stdout.toString().trim()
}