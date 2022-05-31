const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: ['@babel/preset-env', '@babel/preset-react'],
          //   plugins: [
          //     '@babel/plugin-transform-runtime',
          //     '@babel/transform-async-to-generator',
          //   ],
          // },
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /.(css|scss)$/,
        exclude: /(node_modules)/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        exclude: /(node_modules)/,
        // loader: 'file-loader',
        // options: {
        //   name: 'assets/[name].[ext]'
        // }
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
      filename: './index.html',
    }),
    // new CopyPlugin({
    //   patterns: [{ from: './client/style.css' }],
    // }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
    },
    historyApiFallback: true,
    port: 8080,
    compress: true,
    hot: true,
    proxy: {
      '/api/**': 'http://localhost:3036',
      secure: false,
    },
  },
};
