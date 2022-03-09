// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const { i18n } = require('./next-i18next.config');
const CopyPlugin = require('copy-webpack-plugin');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true,
  },
  webpack: (config, options) => {
    const copyNextI18NConfig = new CopyPlugin({
      patterns: [
        { from: './next-i18next.config.js', to: '../' },
      ],
    });

    config.plugins.push(copyNextI18NConfig);
    return config;
  },
  i18n,
};

module.exports = withNx(nextConfig);
