var _webpack = require('webpack');
var _path = require('path');
var _pkg = require(_path.join(__dirname, 'package.json'));
var commonsPlugin = new _webpack.optimize.CommonsChunkPlugin('common.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractTextPlugin = new ExtractTextPlugin('style.css',{
    disable: false,
    allChunks: true
});
var hotModuleReplacementPlugin = new _webpack.HotModuleReplacementPlugin();

module.exports = {
    entry: {
        index: [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            './src/index.jsx'
        ]
    },
    output: {
        path: _path.join(__dirname, 'dist', _pkg.version),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015']
            }
        },{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react']
        },{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style", "css", "autoprefixer")
        },{
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("style", "css", "autoprefixer", "less")
        },{
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)$/,
            loader: 'url?limit=10240'
        }]
    },
    plugins: [commonsPlugin, extractTextPlugin, hotModuleReplacementPlugin]
};