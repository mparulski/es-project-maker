'use strict';

const fs = require('fs');
const path = require('path')

const touch = ({
                   content,
                   file
               }) => {
    fs.writeFileSync(file, content);
}

module.exports = touch
