const path=require('path');
const webpack=require('webpack');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const ExtractTextWebpackPlugin=require('extract-text-webpack-plugin');
const glob=require('glob');
const PurifyCSSPlugin=require('purifycss-webpack');
const entry=require('./webpack_config/entry_webpack.js');
var CopyWebpackPlugin=require('copy-webpack-plugin');
module.exports={
    mode:'development',
    entry:entry,
    output:{
        path:path.resolve(__dirname,'.dist'),
        filename:'[name].js',
        publicPath:'http://127.0.0.1:8081/'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use:ExtractTextWebpackPlugin.extract({
                    fallback:'style-loader',
                    use:[{
                        loader:'css-loader',
                        options:{importLoaders:1}
                    },'postcss-loader']
                })
        },{
            test:/\.(jpg|png|gif)$/,
            use:[{
                loader:'url-loader',
                options:{
                    limit:500,
                    outputPath:'images/'
                }
            }]
        },{
            test: /\.(htm|html)$/,
            loader: 'html-withimg-loader'
        },{
            test:/\.scss$/,
            use:ExtractTextWebpackPlugin.extract({
                 use:['css-loader','sass-loader'],
                fallback:'style-loader'
            }),
           
        },{
            test:/\.(jsx|js)$/,
            use:{
                loader:'babel-loader',
                options:{
                    presets:[
                        'env','react'
                    ]
                }
            },
            exclude:/node_modules/
        }
    ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename:'index.html',
            chunks:'[index]',
            title:'indextitle',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: false
            },
            hash:true,
            template:'./src/index.html'
        }),
        new ExtractTextWebpackPlugin('css/index.css'),
        new PurifyCSSPlugin({
            paths:glob.sync(path.join(__dirname,'src/*.html')),
        }),
        new webpack.BannerPlugin('小洋洋很帅气'),
        new webpack.ProvidePlugin({
            $:'jquery'
        }),
        new CopyWebpackPlugin([{
            from:__dirname+'/src/public',
            to:'./public'
        }])
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'.dist'),
        host:'127.0.0.1', 
        port:8081,
        compress:true,
        open:true,
        hot:true
    }
};