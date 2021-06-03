'use strict'

function getModuleConfig(module) {
  const {config = {}, enabled} = module

  if (!enabled) {
    return {}
  }

  return config
}

module.exports = getModuleConfig
