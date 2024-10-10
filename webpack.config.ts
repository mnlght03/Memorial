import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildPaths } from './config/build/types/config';

// eslint-disable-next-line no-undef
const baseDir = __dirname || path.dirname('');

export default (env: any) => {
  const paths: BuildPaths = {
    entry: path.resolve(baseDir, 'src', 'index.tsx'),
    build: path.resolve(baseDir, 'dist'),
    html: path.resolve(baseDir, 'public', 'index.html'),
    src: path.resolve(baseDir, 'src'),
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
