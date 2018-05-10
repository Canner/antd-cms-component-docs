const path = require("path");

module.exports = {
  resolve: {
    alias: {
      "components": path.resolve(__dirname, '../src/components'),
      "stories": path.resolve(__dirname, '../src/stories'),
      "styled-components": path.resolve(__dirname, '../node_modules/styled-components')
    }
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        loaders: ["style-loader", "css-loader", "less-loader"],
        include: path.resolve(__dirname, "../node_modules/antd")
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"],
        include: path.resolve(__dirname, "../node_modules/@canner/antd-string-editor")
      }
    ]
  }
};