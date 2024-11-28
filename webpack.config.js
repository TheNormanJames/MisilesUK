const path = require('path'),
 HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
// glob = require('glob'),
// PurgeCSSPlugin = require('purgecss-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
 entry: './src/app.js',

 output: {
  // filename: "[name].[chunkhash].js",
  // path: path.resolve(__dirname, '/dist'),
  filename: 'app.[chunkhash].js',

  path: path.resolve(__dirname, './dist'),
  publicPath: '',
  publicPath: 'https://www.eltiempo.com/infografias/2024/11/MisilesUK/',
 },
 devtool: 'source-map',
 optimization: {
  splitChunks: {
   chunks: 'all',
  },
 },
 devServer: {
  // host: '192.168.1.14',
  // host: '192.168.20.78',
  // host: '172.30.70.48',
  // host: '192.168.0.18', //Rafael
  port: 333,
  // contentBase: './dist',
  watchFiles: ['src/**/*.pug', 'public/**/*'],
  hot: true,
  // open: 'mozilla',
  // open: 'responsivly',
 },
 module: {
  rules: [
   {
    test: /\.html$/i,
    use: [
     {
      loader: 'html-loader',
      options: {
       minimize: true,
      },
     },
    ],
   },
   {
    test: /\.(pug)$/,
    use: [
     {
      loader: 'pug-loader',
      options: {
       pretty: true,
       minimize: true,
      },
     },
    ],
   },
   // {
   //   test: /\.scss$/,
   //   use: [
   //     MiniCssExtractPlugin.loader,
   //     "css-loader",
   //     "sass-loader"
   //   ]
   // },
   {
    test: /\.scss$/,
    use: [
     MiniCssExtractPlugin.loader,
     'css-loader',
     {
      loader: 'postcss-loader',
      options: {
       postcssOptions: {
        plugins: [
         [
          'postcss-preset-env',
          {
           // Options
          },
         ],
        ],
       },
      },
     },
     {
      loader: 'sass-loader',
      options: {
       sassOptions: {
        outputStyle: 'compressed',
       },
      },
     },
    ],
   },
   {
    test: /\.jsx?$/i,
    exclude: /(node_modules|bower_components)/,
    use: {
     loader: 'babel-loader',
     options: {
      presets: ['@babel/preset-env'],
     },
    },
   },
   // Usa las ubicaciones de las imagenes reales
   // {
   //   type: "asset",
   //   test: /\.(jpe?g|png|gif|svg|webp)$/i,
   // },
   // Optimización de imagenes con image-webpack-loader
   {
    test: /\.(gif|png|jpe?g|svg|webp)$/i,
    use: [
     {
      loader: 'file-loader',
      options: {
       name: 'assets/[name].[ext]',
       mozjpeg: {
        progressive: true,
        quality: 65,
       },
       // optipng.enabled: false will disable optipng
       optipng: {
        enabled: false,
       },
       pngquant: {
        quality: '65-90',
        speed: 4,
       },
       gifsicle: {
        interlaced: false,
       },
       // the webp option will enable WEBP
       webp: {
        quality: 75,
       },
      },
     },
     'image-webpack-loader',
    ],
   },
   // {

   //   test: /\.(gif|png|jpe?g|svg|webp)$/i,
   //   loader: 'file-loader',
   //   options: {
   //     name: 'assets/[name].[ext]',
   //   },
   // },
   {
    test: /\.(ttf|eot|woff2?|mp4|mp3|txt|xml|pdf)$/,
    use: 'file-loader?name=assets/[name].[ext]',
   },
  ],
 },
 plugins: [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
   // filename: './styles.css',
   filename: 'styles.css',
  }),
  new HtmlWebpackPlugin({
   filename: 'index.html',
   template: 'src/views/pages/index.pug',
   inject: true,
   hash: true,
   minify: {
    // collapseWhitespace: true,
    // removeComments: true
   },
   // chunks: ['script']
  }),
  // new HtmlWebpackPlugin({
  //  filename: 'Yessenia-Jimenez.html',
  //  template: 'src/views/pages/Yessenia-Jimenez.pug',
  //  inject: true,
  //  hash: true,
  //  minify: {},
  // }),

  new CopyPlugin([
   {
    from: './src/css',
    to: 'scss/',
   },
   {
    from: './src/assets',
    to: 'assets/',
   },
  ]),
  // new HtmlWebpackPlugin({
  //   filename: '404.html',
  //   template: 'src/views/pages/404.pug',
  //   inject: true,
  //   hash: true,
  //   minify: {
  //     // collapseWhitespace: true,
  //     // removeComments: true
  //   },
  //   // chunks: ['script']
  // }),
  // new HtmlWebpackPlugin({
  //   filename: '500.html',
  //   template: 'src/views/pages/500.pug',
  //   inject: true,
  //   hash: true,
  //   minify: {
  //     // collapseWhitespace: true,
  //     // removeComments: true
  //   },
  //   // chunks: ['script']
  // }),
  // new PurgeCSSPlugin({
  //   paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
  // }),
  // new WebpackPwaManifest({
  //   name: 'Nombre de la aplicacion web',
  //   short_name: 'Boilerplate NNJ',
  //   description: 'Texto descriptivo de la PWA',
  //   orientation: 'any',
  //   display: 'standalone',
  //   start_url: 'index.html?utm=homescreen',
  //   scope: '/',
  //   lang: 'es_CO',
  //   background_color: '#EEE',
  //   theme_color: '#1565c0',
  //   icons: [{
  //     src: path.resolve('src/img/edgram-icon-black.png'),
  //     sizes: [16, 32, 64, 96, 128, 192, 256, 384, 512, 1024],
  //     type: 'image/png'
  //   }],
  //   fingerprints: false
  // }),

  // new CopyPlugin([{
  //     from: './src/statics'
  //   },
  //   // {
  //   //   from: './src/img/'
  //   // },
  // ]),
  // De imagen-webpack
  // new ImageminPlugin({
  //   bail: false, // Ignore errors on corrupted images
  //   cache: true,
  //   name: "[name].[ext]",
  //   imageminOptions: {
  //     // Before using imagemin plugins make sure you have added them in `package.json` (`devDependencies`) and installed them

  //     // Lossless optimization with custom option
  //     // Feel free to experiment with options for better result for you
  //     plugins: [
  //       ["gifsicle", {
  //         interlaced: true
  //       }],
  //       ["jpegtran", {
  //         progressive: true
  //       }],
  //       ["optipng", {
  //         optimizationLevel: 5
  //       }],
  //       [
  //         "svgo",
  //         {
  //           plugins: [{
  //             removeViewBox: false
  //           }]
  //         }
  //       ]
  //     ]
  //   }
  // })
  // new ImageminPlugin({
  //   externalImages: {
  //     context: 'src', // Important! This tells the plugin where to "base" the paths at
  //     sources: glob.sync('src/images/**/*.png'),
  //     destination: 'src/build/img',
  //     fileName: '[path][name].[ext]' // (filePath) => filePath.replace('jpg', 'webp') is also possible
  //   }
  // })
 ],
};
