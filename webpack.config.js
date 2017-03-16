let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = {
    devtool: "",
    entry: {
        main: __dirname + '/app/main.js',
    },
    output: {
        path: __dirname + '/dist',
        filename: 'build.js'
    },
    devServer: {
        contentBase: __dirname + '/dist',
        historyApiFallback : true,
        inline: true,
        port: 9999
    },
    module: {
         rules: [
            {test: /\.html$/, exclude: /node_modules/, use: 'html-loader'},
            { 
                test: /\.scss$/i, 
                exclude: /node_modules/, 
                use: ExtractTextPlugin.extract({
                    use: 'css-loader!sass-loader',
                    fallback: 'style-loader'
                })},
            {test: /\.json$/, exclude: /node_modules/, use: 'json-loader' },
            {test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'},
            {test: /angular(\.min)?\/.js$/, use: 'imports-loader?$=jquery'},
            {test: /jquery(\.min)?\.js$/, use: 'expose-loader?jQuery'}
         ]
    },
    plugins:[
         new HtmlWebpackPlugin({
             template: __dirname + '/app/index.tmpl.html'
         }),
         new webpack.optimize.CommonsChunkPlugin({
              name: 'vendor',
              filename: 'vendor.js',
              minChunks: 2 
         }),
         new ExtractTextPlugin('./[name].css')
    ]
}
module.exports = config;