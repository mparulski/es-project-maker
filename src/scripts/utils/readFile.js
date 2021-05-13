'use strict'

const fs = require('fs')

function readFile(file) {
    return fs.readFileSync(file, {encoding: 'utf8', flag: 'r'})
}

module.exports = readFile
