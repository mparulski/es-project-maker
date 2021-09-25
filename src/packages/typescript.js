module.exports = {
  base: [
    {
      typescript: {
        version: '4.4.3',
        type: '--save-dev',
      },
    },
    {
      'ts-loader': {
        version: '9.2.6',
        type: '--save-dev',
      },
    },
  ],
  react: [
    {
      '@types/react': {
        version: '17.0.24',
        type: '--save-dev',
      },
    },
    {
      '@types/react-dom': {
        version: '17.0.9',
        type: '--save-dev',
      },
    },
  ],
}
