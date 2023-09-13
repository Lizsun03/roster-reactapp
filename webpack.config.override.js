const path = require('path');

module.exports = {
  webpack: (config, env) => {
    // Add support for importing .sass files
    config.module.rules.push({
      test: /\.sass$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
          },
        },
      ],
      include: path.resolve(__dirname, '../src'),
    });

    return config;
  },
};