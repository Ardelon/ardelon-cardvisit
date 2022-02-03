const path = require('path');


let config = {
  mode : "",
  entry : './src/index.js',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  }
}
const build = {
    filename: 'build.js',
    path: path.resolve(__dirname, 'build'),
  };
 


const prod = {

    library : {
      name : 'cardvisit',
      type : 'commonjs2'
    },
    filename: 'npmIndex.js',
    path: path.resolve(__dirname, 'dist'),
  };


module.exports = (env, argv) => {
  if (argv.mode === "development") {
    config.output = build;
  } else {
    config.output = prod;
  }

  return config
}