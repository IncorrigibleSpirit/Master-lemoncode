import path from "path";
import url from "url";
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  context: path.resolve(__dirname, "src"),
  entry: {
    app: "./index.jsx",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  output: {
    filename: "js/[name].[chunkhash].js",
    assetModuleFilename: "images/[hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpg)$/,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext][query]",
        },
      },
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // archivo desde el cual bebera
      filename: "html/index.html", // archivo final - nombre para el bundle
      scriptLoading: "blocking",
      hash: true,
    }),
  ],
};
