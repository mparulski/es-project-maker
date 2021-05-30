'use strict'

const logger = require('../utils/logger')
const merge = require('../utils/mergeWithCombineArray')
const path = require('path')
const touch = require('../utils/touchJSON')

const MODULES = require('../modules')

const CONFIG_FILENAME = 'tsconfig.json'

function calculateConfigTypescript(config, options) {
  logger.info('Start building the ' + CONFIG_FILENAME)

  let typescriptConfig = require('../../config/typescript/base.typescript.config')

  if (options.enabledModules.has(MODULES.REACT)) {
    typescriptConfig = merge(
      typescriptConfig,
      require('../../config/typescript/react.typescript.config'),
    )
  }

  const content = touch(
    options.projectRootDir + path.sep + CONFIG_FILENAME,
    typescriptConfig,
  )

  options.verbose && logger.debug(CONFIG_FILENAME, content)

  logger.info(CONFIG_FILENAME + ' was built')
}

module.exports = calculateConfigTypescript
