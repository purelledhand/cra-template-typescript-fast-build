const {
  override,
} = require('customize-cra');

const disableForkTsCheckerWebpackPlugin = () => config => {
  const forkTsCheckingPluginIndex = config.plugins.findIndex(({
    options,
  }) => options && Object.keys(options).find((option) => option === "tsconfig"));

  config.plugins.splice(forkTsCheckingPluginIndex, 1);
  return config;
};

module.exports = {
  webpack: override(
    disableForkTsCheckerWebpackPlugin(),
  ),
};
