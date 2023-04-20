module.exports = {
  entry: {
    index: "./src/app/index.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      }
    ]
  },
  output:{
    filename:'[name].min.js'
  }
};