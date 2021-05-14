'use strict'

const addDependencies = require('./addDependencies')
const logger = require('./logger')

function manageDependencies(moduleName, dependencies, options) {
    logger.info(`Start install ${moduleName} dependencies`)

    addDependencies(
        Object.values(dependencies).flatMap(dependency =>
            Object.entries(dependency).map(
                ([name, version]) => `${name}@${version}`,
            ),
        ),
        '--save-dev',
        options.verbose,
    )

    logger.info(`${moduleName} dependencies wa installed`)
}

module.exports = manageDependencies
