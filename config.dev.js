const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  //loader
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  //loader
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 3501,
  },
};
