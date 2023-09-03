import path from 'path';
import nodeExternals from 'webpack-node-externals';


const settings = () => {
  return (
    {
      entry: './server/index.js',

      target: 'node',

      externals: [nodeExternals()],

      output: {
        path: path.resolve('server-build'),
        filename: 'index.js'
      },

      module: {
        rules: [
          {
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', "@babel/preset-react", { targets: "defaults" }]
                ]
              }
            }
          }
        ]
      },

      resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      
      
      }
  );
  
};

export default settings;