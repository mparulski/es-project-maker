'use strict'

function getBabelConfig({noWebpack}) {
  const isModules = noWebpack ? true : false

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: (String(process.env.NODE_ENV) === 'test' ? 'commonjs' : isModules),
          targets: {browsers: 'cover 99.5%, last 3 versions, not ie 11'},
        },
      ],
    ],
    plugins: [
      '@babel/plugin-proposal-throw-expressions',
      '@babel/plugin-transform-arrow-functions',
      '@babel/plugin-transform-runtime',
    ],
  }
}

module.exports = getBabelConfig
