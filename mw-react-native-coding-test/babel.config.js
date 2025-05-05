module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ['expo-router'],
    plugins: ["react-native-reanimated/plugin"],
  };
};
