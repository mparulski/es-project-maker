module.exports = {
  base: [
    {webpack: {version: '5.52.1', type: '--save-dev'}},
    {'webpack-merge': {version: '5.8.0', type: '--save-dev'}},
    {'webpack-cli': {version: '4.8.0', type: '--save-dev'}},
    {'webpack-dev-server': {version: '4.2.0', type: '--save-dev'}},
    {'sass-loader': {version: '12.1.0', type: '--save-dev'}},
    {'resolve-url-loader': {version: '4.0.0', type: '--save-dev'}},
    {'css-loader': {version: '6.2.0', type: '--save-dev'}},
    {
      '@mparulski/es-project-maker-webpack': {
        version: '0.8.0',
        type: '--save-dev',
      },
    },
  ],
}
