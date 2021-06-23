'use strict'

const OPTIONAL_MODULES = require('../optionalModules')

const getEnabledModules = projectConfig => {
  return new Set(
    Object.entries(OPTIONAL_MODULES)
      .filter(([key, val]) =>
        Object.prototype.hasOwnProperty.call(
          Object.assign({}, projectConfig),
          val,
        ),
      )
      .map(([key, val]) => val),
  )
}

const getConfig = projectConfig => moduleKey => {
  if (
    !Object.prototype.hasOwnProperty.call(
      Object.assign({}, projectConfig),
      moduleKey,
    )
  ) {
    return config => {
      return config
    }
  }

  return projectConfig[moduleKey]
}

const init = projectConfig => {
  const enabledModules = getEnabledModules(projectConfig)

  const modules = {
    hasReact: enabledModules.has(OPTIONAL_MODULES.REACT),
  }

  const getConfigByModuleKey = getConfig(projectConfig)

  const configs = {
    callbackConfigBabel: getConfigByModuleKey('babel'),
    callbackConfigEslint: getConfigByModuleKey('eslint'),
    callbackConfigPrettier: getConfigByModuleKey('prettier'),
    callbackConfigReact: getConfigByModuleKey('react'),
    callbackConfigTypescript: getConfigByModuleKey('typescript'),
    callbackConfigWebpack: getConfigByModuleKey('webpack'),
  }

  Object.assign(init, Object.freeze(modules), Object.freeze(configs))
}

module.exports = init
