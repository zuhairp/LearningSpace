module.exports = {
  entry: './index.js',
  output: {
    path: __dirname+"/build/",
    filename: "bundle.js"
  },
  module: {
    noParse: [
      /node_modules\/aframe\/dist\/aframe.js/
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}

