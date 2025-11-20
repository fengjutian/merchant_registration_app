/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  resolver: {
    nodeModulesPaths: [require('path').resolve(__dirname, 'node_modules')],
    unstable_enableSymlinks: true,
    unstable_enablePackageExports: true,
  },
  watchFolders: [require('path').resolve(__dirname, 'node_modules')],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
