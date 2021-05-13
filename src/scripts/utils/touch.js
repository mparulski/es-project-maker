'use strict'

const fs = require('fs')

const touch = ({content, file}) => {
    fs.writeFileSync(file, content)
}

module.exports = touch
