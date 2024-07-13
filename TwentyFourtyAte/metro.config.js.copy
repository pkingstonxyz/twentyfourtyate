// metro.config.js

const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const config = {
  resolver: {
    sourceExts: ['js', 'jsx', 'json', 'ts', 'tsx', 'cjs'],
    assetExts: ['glb', 'png', 'jpg'],
  },
}

defaultConfig = getDefaultConfig(__dirname);
module.exports = mergeConfig(defaultConfig, config);
