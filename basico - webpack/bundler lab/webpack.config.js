import path from "path";
import url from "url";
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
  context: path.resolve(__dirname, "src"),
  entry: ["./index.ts"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].js",
    assetModuleFilename: "[hash][ext][query]",
  },
  resolve: {
    extensions: [".js", ".ts"],
  },

  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
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
          filename: "[name][ext][query]",
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
      filename: "index.html", // archivo final - nombre para el bundle
      scriptLoading: "blocking",
      hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css",
      chunkFilename: "[id].css",
    }),
  ],
  devServer: {
    port: 3000,
    hot: true,
    devMiddleware: {
      stats: "errors-only",
    },
  },
};
