module.exports = {
  base: [
    {'@babel/cli': {version: '7.14.8', type: '--save-dev'}},
    {'@babel/core': {version: '7.15.0', type: '--save-dev'}},
    {'@babel/preset-env': {version: '7.15.0', type: '--save-dev'}},
    {'@babel/preset-typescript': {version: '7.15.0', type: '--save-dev'}},
    {'@babel/runtime': {version: '7.15.3', type: '--save-dev'}},
    {
      '@babel/plugin-proposal-throw-expressions': {
        version: '7.14.5',
        type: '--save-dev',
      },
    },
    {
      '@babel/plugin-transform-arrow-functions': {
        version: '7.14.5',
        type: '--save-dev',
      },
    },
    {
      '@babel/plugin-transform-modules-commonjs': {
        version: '7.15.0',
        type: '--save-dev',
      },
    },
    {'babel-loader': {version: '8.2.2', type: '--save-dev'}},
  ],
  react: [{'@babel/preset-react': {version: '7.14.5', type: '--save-dev'}}],
}
