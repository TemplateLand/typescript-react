import { merge } from "webpack-merge";
import common from "./webpack.common";

export default merge(common, {
  mode: "development",
  devServer: {
    historyApiFallback: true,
    hot: true,
    compress: true,
  },
  devtool: "inline-source-map",
});
