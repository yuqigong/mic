// package.js with webpack
// by @Richie

import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import TransferWebpackPlugin from 'transfer-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'

webpack({
    entry: {
        index: './src/main/index.js',
        vendor: ['vue', 'vue-router']
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash:8].js',
        libraryTarget: 'umd',
        library: 'mic'
    },
    devtool: '#source-map',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader'
        }, {
            test: /\.vue$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    css: ExtractTextPlugin.extract({
                        loader: 'css-loader',
                        fallback: 'vue-style-loader'
                    }),
                    sass: ExtractTextPlugin.extract({
                        loader: 'css-loader!sass-loader',
                        fallback: 'vue-style-loader'
                    })
                }
            }
        }, {
            test: /\.(css|sass|scss)$/,
            exclude: /(node_modules|bower_components)/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]?[hash]'
            }
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve('./'),
            verbose: true,
            dry: false
        }),
        new TransferWebpackPlugin(
            [{ from: 'src/assets/comm' }],
            path.join(__dirname, '../')
        ),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/main/index.html',
            inject: true
        }),
        // 抽离公共js
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].[hash:8].js'
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new ExtractTextPlugin('style.[contenthash:8].css')
    ]
}, () => {
    console.log('## package 代码编译完成');
})
