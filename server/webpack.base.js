const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles.css',
    }),
  ],

  // ────────────────────────────────────────────────────────────────────────────────

  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: require.resolve('style-loader'),
          use: [
            {
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: 1,
                minimize: true,
              },
            },
          ],
        }),
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            [
              'env',
              {
                target: {
                  browsers: ['last 2 versions'],
                },
              },
            ],
          ],
        },
      },
    ],
  },
}
