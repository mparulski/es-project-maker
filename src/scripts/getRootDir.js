fs = require('fs');
const path = require('path')

const PACKAGE_JSON_FILE_NAME = 'package.json'
const APPLICATION_ROOT_DIR_PROPERTY = 'applicationRootDir'

const scriptPath = path.resolve(__dirname)

const isRootFile = (fileDir) => {
    const content = JSON.parse(fs.readFileSync(fileDir))

    return Object.prototype.hasOwnProperty.call(Object.assign({}, content), APPLICATION_ROOT_DIR_PROPERTY)
}

const getRoot = (currentPath) => {
    const hasPackageJsonFile = fs.existsSync(currentPath + '/' + PACKAGE_JSON_FILE_NAME)

    if (hasPackageJsonFile && isRootFile(path.resolve(currentPath, PACKAGE_JSON_FILE_NAME))) {
        return currentPath
    }

    if (currentPath === path.resolve(currentPath, '..')) {
        console.error(
            '\x1b[31m',
            'Can\'t be found application root dir!\n',
            '\x1b[33m',
            'Probably the application does not have package.json file created or the application package.json file does not have the property \'"applicationRootDir" : true\'',
            '\x1b[0m')
        process.exit(1)
    }

    getRoot(path.resolve(currentPath, '..'))
}

return getRoot(scriptPath)