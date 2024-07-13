// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = config;
module.exports.resolver = {
  sourceExts: ['js', 'jsx', 'json', 'ts', 'tsx', 'cjs'],
  assetExts: ['glb', 'png', 'jpg'], }
