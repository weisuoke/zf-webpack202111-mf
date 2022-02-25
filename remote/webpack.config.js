let path = require("path");
let webpack = require("webpack");
let HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    publicPath: "http://localhost:3000/",
  },
  devServer: {
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-react"]
          },
        },
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./public/index.html'
    }),
    new ModuleFederationPlugin({
      filename: 'remoteEntry.js',
      name: 'remoteVariable',
      exposes: {
        './NewsList': "./src/NewsList"
      },
      remotes: {
        remote: "hostVariable@http://localhost:8000/hostEntry.js"
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true }
      }
    })
  ]
}
