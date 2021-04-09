import { Configuration as WebpackConfiguration, Compiler } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

export interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

export type Plugin = (this: Compiler, compiler: Compiler) => void;
