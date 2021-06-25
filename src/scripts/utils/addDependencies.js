'use strict'

const spawn = require('./spawn')
const logger = require('./logger')

function addDependencies(packages, verbose = false) {
  const command = 'npm'
  const baseArgs = ['install', '--save-exact', verbose && '--verbose'].filter(
    e => e,
  )
  const args = baseArgs.concat(packages)
  const proc = spawn.sync(command, args, {stdio: 'inherit'})

  if (proc.status !== 0) {
    logger.error(`\`${command} ${args.join(' ')}\` failed!`)
    process.exit(1)
  }
}

module.exports = addDependencies
