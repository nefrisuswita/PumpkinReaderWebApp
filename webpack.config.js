
module.exports = {
  mode: 'development', 
  entry: {
    main: './src/index.tsx'
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
          {
            test: /\.js$/,
            exclude: [ /intl-.*/, /node_modules/ ],
            use: 'source-map-loader' 
          },
          {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: 'ts-loader'
          },
          { 
            test: /\.css$/, 
            use: 'css-loader' 
          }
      ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js'],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};