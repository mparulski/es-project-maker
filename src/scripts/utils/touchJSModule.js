'use strict'

const touch = require('./touch')

const touchJSModule = (file, fileContent) => {
  const content = 'module.exports = ' + JSON.stringify(fileContent, null, 2)

  touch({
    file,
    content,
  })

  return content
}

module.exports = touchJSModule
