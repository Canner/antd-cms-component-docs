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
        use: ["style-loader", "css-loader", {
          loader: "less-loader",
          options: {
            javascriptEnabled: true
          }
        }],
        include: path.resolve(__dirname, "../node_modules/antd")
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"],
        include: [
          path.resolve(__dirname, "../node_modules")
        ]
      },
      {
        test: /\.txt$/,
        loaders: ["raw-loader"]
      }
    ]
  }
};