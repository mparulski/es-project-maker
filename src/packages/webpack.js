module.exports = {
  base: [
    {webpack: {version: '5.43.0', type: '--save-dev'}},
    {'webpack-merge': {version: '5.8.0', type: '--save-dev'}},
    {'webpack-cli': {version: '4.7.2', type: '--save-dev'}},
    {'webpack-dev-server': {version: '3.11.2', type: '--save-dev'}},
    {'sass-loader': {version: '12.1.0', type: '--save-dev'}},
    {'resolve-url-loader': {version: '4.0.0', type: '--save-dev'}},
    {'mini-css-extract-plugin': {version: '2.1.0', type: '--save-dev'}},
    {'css-loader': {version: '5.2.6', type: '--save-dev'}},
    {
      '@mparulski/es-project-maker-webpack': {
        version: '0.2.0',
        type: '--save-dev',
      },
    },
  ],
}
