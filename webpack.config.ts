const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env: any, argv: any) => {
  const isDevelopment = argv.mode !== 'production';

  return {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'scripts/[name].bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/images/[name][ext][query]'
          }
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader'
          ]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-typescript']
            }
          }
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx']
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/[name].css'
      }),
      new HtmlWebpackPlugin({
        template: 'src/template.php',
        filename: isDevelopment ? 'index.html' : 'index.php',
        inject: true,
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: true,
      port: 3000,
      historyApiFallback: true,
    }
  };
}
