module.exports = (api) => {
  api.cache(true);
  return {
    plugins: [],
    presets: [
      ['@babel/preset-env'],
      '@babel/preset-react',
      '@babel/preset-flow',
    ],
  };
};
