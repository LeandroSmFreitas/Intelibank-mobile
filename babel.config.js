module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        alias: {
          data: './src/data',
          infrastructure: './src/infrastructure',
          presentation: './src/presentation',
          domain: './src/domain',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
