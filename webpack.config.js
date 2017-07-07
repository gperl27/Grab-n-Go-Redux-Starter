process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: __dirname,
    publicPath: '/dist',
    filename: 'index_bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-lodaer', 'autoprefixer-loader?browsers=last 2 versions'],
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'autoprefixer-loader?browsers=last 2 versions', 'sass-loader'],
      }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
  },
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map',
};
