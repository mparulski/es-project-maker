'use strict'

const logger = require('../utils/logger')
const path = require('path')
const touch = require('../utils/touchJSON')

const CONFIG_FILENAME = 'tsconfig.json'

function calculateConfigTypescript(options) {
  logger.info('Start building the ' + CONFIG_FILENAME)

  let configValues = require('../../config/typescript/base.typescript.config')

  if (!options.noReact) {
    configValues.compilerOptions = {
      ...configValues.compilerOptions,
      ...require('../../config/typescript/react.typescript.config')
        .compilerOptions,
    }
  }

  const content = options.prettierConfig(configValues)

  const fileContent = touch(
    options.projectRootDir + path.sep + CONFIG_FILENAME,
    content,
  )

  options.verbose && logger.debug(CONFIG_FILENAME, fileContent)

  logger.info(CONFIG_FILENAME + ' was built')
}

module.exports = calculateConfigTypescript
