import common from "./webpack.common.js";
import { merge } from "webpack-merge";
import Dotenv from "dotenv-webpack";

export default merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: "./src/dev.env",
    }),
  ],
  devServer: {
    port: 8080,
    hot: true,
    devMiddleware: {
      stats: "errors-only",
    },
  },
});
