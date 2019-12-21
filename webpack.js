const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const postCssAutoprefixer = require('autoprefixer');
const postcssNested = require('postcss-nested');
const postcssImport = require('postcss-import');

const MODE = process.env.NODE_ENV;
const IS_PROD = MODE === 'production';
const IS_DEV = MODE === 'development';

module.exports = {

  entry: {
    app: './src/index.js',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'emails.miro.js',
    publicPath: '/',
    library: 'EmailsEditor',
    libraryTarget: 'var',
  },

  devServer: {
    hot: true,
    compress: true,
    port: 3000,
    historyApiFallback: true,
    open: false,
  },

  watch: IS_DEV,

  mode: MODE,

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      }, {
        test: /\.pcss/,
        use: [
          IS_PROD ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                postCssAutoprefixer({
                  remove: true,
                }),
                postcssImport({ plugins: [postcssNested()] }),
                postcssNested(),
              ],
            },
          }],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin(
      {
        filename: 'emails.miro.css',
      },
    ),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/index.html',
      publicPath: '/',
      inject: 'head',
    }),
  ],

};
