'use strict'

function getBabelConfig({noTests, noWebpack}) {
  const modules = !noWebpack ? false : undefined

  let config = {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: String(process.env.NODE_ENV) === 'test' ? 'commonjs' : modules,
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

  if (!noTests) {
    const testEnvConfig = {
      env: {
        test: {
          presets: [
            [
              '@babel/preset-env',
              {
                modules: 'commonjs',
              },
            ],
          ],
        },
      },
    }

    config = {
      ...config,
      ...testEnvConfig,
    }
  }

  return config
}

module.exports = getBabelConfig
