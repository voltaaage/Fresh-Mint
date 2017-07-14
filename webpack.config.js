const path = require('path')

module.exports = {
  context: path.resolve(__dirname),
  entry: {
    client: './client/app'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.scss']
  },
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react'],
              plugins: ['transform-object-rest-spread']
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'compressed',
              includePaths: [
                path.resolve(__dirname, 'node_modules')
              ]
            }
          }
        ]
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ]
  }
}
