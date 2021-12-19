const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  TerserPlugin = require('terser-webpack-plugin'),
  CssMinimizerPlugin = require('css-minimizer-webpack-plugin'),
  { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    assetModuleFilename: "assets/images/[hash][ext][query]"
  },
  mode: "production",
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      "@images": path.resolve(__dirname,'src/assets/images/'),
      "@components": path.resolve(__dirname, 'src/components/'),
      "@styles": path.resolve(__dirname, 'src/assets/styles/')
    }
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|gif|jpg|jpeg|webp)$/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: "assets/[name].[contenthash].css"
    }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin()
    ]
  }
};
