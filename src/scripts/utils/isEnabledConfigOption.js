'use strict';

const FLAG_ENABLED = 'enabled'

function isEnabledConfigOption(config) {
    return config !== undefined
        && Object.prototype.hasOwnProperty.call(Object.assign({}, config), FLAG_ENABLED)
        && config[FLAG_ENABLED] === true;
}

module.exports = isEnabledConfigOption