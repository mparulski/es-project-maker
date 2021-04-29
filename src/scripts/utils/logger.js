const logger = (color, ...content) => {
    console.log(color, ...content)
}

const loggers = {
    debug: (...content) => logger('\x1b[35m', ...content, '\x1b[0m'),
    error: (...content) => logger('\x1b[31m', ...content, '\x1b[0m'),
    info: (...content) => logger('\x1b[36m', ...content, '\x1b[0m')
}

module.exports = loggers