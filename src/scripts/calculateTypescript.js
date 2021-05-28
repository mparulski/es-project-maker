'use strict'

const manageDependencies = require('./utils/manageDependencies')
const merge = require('./utils/mergeWithCombineArray')
const path = require('path')
const touch = require('./utils/touchJSModule')

const MODULES = require('./modules')

const CONFIG_FILENAME = 'tsconfig.json'

function createConfig(config, options) {
  logger.info('Start building the ' + CONFIG_FILENAME)

  let typescriptConfig = require('../config/typescript/base.typescript.config')

  const modulesConfig = {
    [MODULES.REACT]: () => {
      typescriptConfig = merge(
        typescriptConfig,
        require('../config/typescript/react.typescript.config'),
      )
    },
  }

  execOptions(modulesConfig)(options.enabledModules)()

  const content = touch(
    options.projectRootDir + path.sep + CONFIG_FILENAME,
    typescriptConfig,
  )

  options.verbose && logger.debug(CONFIG_FILENAME, content)

  logger.info(CONFIG_FILENAME + ' was built')
}

function calculateTypescript(config, options) {
  !options.noDeps &&
    manageDependencies(
      MODULES.TYPESCRIPT,
      require('../packages/typescript').base,
      options,
    )

  createConfig(config, options)
}

module.exports = calculateTypescript
