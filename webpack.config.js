import MiniCssExtractPlugin, {
  loader as _loader,
} from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { resolve, join } from "path";

export const entry = "./src/index.js";
export const output = {
  filename: "index.js",
  path: resolve(__dirname, "./dist"),
};
export const devServer = {
  contentBase: join(__dirname, "./dist"),
  compress: true,
  port: 9000,
};
export const plugins = [
  new HtmlWebpackPlugin({
    template: "src/index.html",
  }),
  new MiniCssExtractPlugin(),
];
export const module = {
  rules: [
    {
      test: /\.css$/i,
      use: [_loader, "css-loader"],
    },
    {
      test: /\.html$/i,
      loader: "html-loader",
    },
  ],
};
