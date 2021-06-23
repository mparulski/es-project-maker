'use strict'

const logger = require('../utils/logger')
const path = require('path')
const touch = require('../utils/touchJSON')
const moduleHelper = require('../helpers/moduleHelper')

const CONFIG_FILENAME = 'tsconfig.json'

function calculateConfigTypescript(options) {
  logger.info('Start building the ' + CONFIG_FILENAME)

  let typescriptConfig = require('../../config/typescript/base.typescript.config')

  if (moduleHelper.hasReact) {
    typescriptConfig.compilerOptions = {
      ...typescriptConfig.compilerOptions,
      ...require('../../config/typescript/react.typescript.config')
        .compilerOptions,
    }
  }

  const content = touch(
    options.projectRootDir + path.sep + CONFIG_FILENAME,
    moduleHelper.callbackConfigTypescript(typescriptConfig),
  )

  options.verbose && logger.debug(CONFIG_FILENAME, content)

  logger.info(CONFIG_FILENAME + ' was built')
}

module.exports = calculateConfigTypescript
