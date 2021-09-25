'use strict'

const logger = require('../utils/logger')
const path = require('path')
const touch = require('../utils/touchJSON')

const CONFIG_FILENAME = 'tsconfig.json'

function calculateConfigTypescript(args, runtimeOptions) {
  logger.info('Start building the ' + CONFIG_FILENAME)

  const {noReact, typescriptConfig, verbose} = args
  let configValues = require('../../config/typescript/base.typescript.config')

  if (!noReact) {
    configValues.compilerOptions = {
      ...configValues.compilerOptions,
      ...require('../../config/typescript/react.typescript.config')
        .compilerOptions,
    }
  }

  const content = typescriptConfig(configValues)

  const fileContent = touch(
    runtimeOptions.projectRootDir + path.sep + CONFIG_FILENAME,
    content,
  )

  verbose && logger.debug(CONFIG_FILENAME, fileContent)

  logger.info(CONFIG_FILENAME + ' was built')
}

module.exports = calculateConfigTypescript
