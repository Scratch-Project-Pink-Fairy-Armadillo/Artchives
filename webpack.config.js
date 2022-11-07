const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client/index.js',

    output: {
        path: path.join(__dirname, '/dist'),
        //added by aimee
        publicPath: '/',
        filename: 'bundle.js'
    },
    // devtool: 'eval-source-map',
    mode: 'development',
    devServer: {
      host: 'localhost',
      port: 8080,
      // enable HMR on the devServer
      hot: true,
      // fallback to root for other urls
      historyApiFallback: true,
  
      static: {
        // match the output path
        directory: path.resolve(__dirname, '/dist'),
        //added by aimee
        publicPath: '/',
      },
      headers: { 'Access-Control-Allow-Origin': '*' },
    /**
     * proxy is required in order to make api calls to
     * express server while using hot-reload webpack server
     * routes api fetch requests from localhost:8080/api/* (webpack dev server)
     * to localhost:3000/api/* (where our Express server is running)
     */
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000/',
        secure: false,
      },
      //tookout by aimee
      // '/assets/**': {
      //   target: 'http://localhost:3000/',
      //   secure: false,
      // },
    },
  },

    plugins: [
        new HTMLWebpackPlugin({
            template: './client/index.html'
        })
    ], 
    module: {
        rules: [
            {
                test: /\.(js|jsx$)/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /.(css|scss)$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    resolve: {
        // Enable importing JS / JSX files without specifying their extension
        extensions: ['.js', '.jsx'],
      },
}