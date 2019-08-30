module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-module-resolver', {
        alias: {
          'images': './assets/images',
          'assets': './assets',
          'styles': './src/styles',
        },
      },
    ],
  ]
};
