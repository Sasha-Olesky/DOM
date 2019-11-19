var path = require('path')

var config = {
  context: path.join(__dirname, 'src'),
  entry: {
    sources: './index.ts'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'sources.js',
    libraryTarget: 'commonjs',
    library: 'Sources'
  },
  resolve: {
    extensions: ['.js', '.ts', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: { loader: 'babel-loader' },
        exclude: /node_modules/
      },
      { test: /\.ts$/, use: { loader: 'ts-loader' } }
    ]
  },
  node: {
    fs: 'empty'
  },
  mode: 'development',
  plugins: []
}

module.exports = config
