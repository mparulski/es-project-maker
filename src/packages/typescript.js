module.exports = {
  base: [
    {
      typescript: {
        version: '4.4.4',
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
        version: '17.0.34',
        type: '--save-dev',
      },
    },
    {
      '@types/react-dom': {
        version: '17.0.11',
        type: '--save-dev',
      },
    },
  ],
}
