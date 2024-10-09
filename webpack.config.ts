import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildPaths } from './config/build/types/config';

export default (env: any) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const mode = env.mode || 'development';

  const port = env.port || 3000;

  const isDev = mode === 'development';

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    port,
    isDev,
  });

  return config;
};
