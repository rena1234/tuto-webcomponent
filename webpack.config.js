const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/component.js",
  output: {
    filename: "component.js",
    path: path.resolve(__dirname, "dist")
  },
	module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'raw-loader',
          {
            loader:'sass-loader',
            options: {
              sassOptions:{
                includePaths: [path.resolve(__dirname, 'node_modules')]
              }
            }
          }
        ]
      }
    ]
  }
};
