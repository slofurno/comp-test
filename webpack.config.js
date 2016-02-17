var webpack = require('webpack');

var plugins = [
  new webpack.optimize.OccurenceOrderPlugin()
];

module.exports = {
    entry: './src/index.js',
    output: {
      path: 'lib',
      filename: 'square.js',
      library: 'square',
      libraryTarget: 'umd',
    },
    module: {
      loaders: [{   
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }]
    },
		externals: [ 
			{"react": {
				 root: "React",
				 commonjs2: "react",
				 commonjs: "react",
				 amd: "react"
				}
			}
		],
    plugins: plugins,
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
