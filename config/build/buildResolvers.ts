import { ResolveOptions } from 'webpack';

import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions {
  const { src } = options.paths;

  return {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      '@': src,
    },
    plugins: [new TsconfigPathsPlugin()],
  };
}
