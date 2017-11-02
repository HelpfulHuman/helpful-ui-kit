const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.styl$/,
        loaders: ["stylus-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../")
      }
    ]
  }
};
