'use strict'

const semver = require('semver')

function isComparedVersionIsNewerThanInstalled(comparedVersion, installedVersion) {
    return semver.gt(comparedVersion, installedVersion)
}

module.exports = isComparedVersionIsNewerThanInstalled
