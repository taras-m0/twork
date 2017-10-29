const
    autoprefixer = require('autoprefixer'),
    path = require('path'),
    webpack = require('webpack'),
    SvgStorePlugin = require('webpack-svgstore-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    SpritesmithPlugin = require('webpack-spritesmith'),
    addComment = require('./front/docs/addComment');


module.exports = (env) => {
    const config = {
        devServer: {
            port: 8081,
            contentBase: [
                path.join(__dirname, './front/docs')
                ,path.join(__dirname, './public')
            ],
            historyApiFallback: true,
            hot: true,
            setup: function(app){
                app.post('/api/add', addComment );
            },
            proxy: {
                '/api/add': {
                    target: 'http://twork:88'
                }
            }
        },
        devtool: env.development ? 'cheap-module-eval-source-map' : false,
        context: path.resolve(__dirname, './front' ),
        entry: {
          "app-comment": [
               'babel-polyfill',
               './index.js'
           ]
        },
        output: {
            path: path.resolve(__dirname, './public'),
            filename: 'js/[name].bundle.js',
            // publicPath: '/web/'
        },
        module: {
            rules: [
/*                {
                    test: /\.(?:jsx?)$/,
                    use: [
                        'eslint-loader'
                    ],
                    enforce: 'pre',
                    exclude: [
                        path.resolve(__dirname, 'node_modules'),
                    ]
                }, */
                {
                    test: /\.less$/,
                    exclude: [
                        path.resolve(__dirname, 'node_modules')
                    ],
                    include: [
                       path.resolve(__dirname, './front')
                    ],
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [{
                            loader: 'css-loader',
                            options: {
                                minimize: env.production,
                                sourceMap: env.development
                            }
                        }, {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    autoprefixer({
                                        browsers: ['last 2 versions']
                                    })
                                ],
                                sourceMap: env.development ? 'inline' : false
                            }
                        }, {
                            loader: 'less-loader',
                            options: {
                                sourceMap: env.development,
                                sourceMapContents: env.development
                            }
                        }]
                    })
                },
                {
                    test: /\.(?:jsx?)$/,
                    use: 'babel-loader',
                    exclude: [
                        path.resolve(__dirname, 'node_modules'),
                        /.*example\.jsx$/
                    ]
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.(jpeg|gif|svg)$/i,
                    use: 'url-loader'
                },
                {test: /\.styl$/, loaders: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]}
                ,{
                    test: /\.png$/,
                    loader: "url-loader?mimetype=image/png"
                }
            ]
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks: (module) => {
                    return module.context && module.context.indexOf('node_modules') !== -1;
                }
            }),
            new SvgStorePlugin({
                svgoOptions: {
                    plugins: [
                        {cleanupEnableBackground: true},
                        {removeAttrs: {attrs: ['fill-rule', 'stroke', 'stroke-width', 'stroke-linejoin']}},
                        {removeComments: true},
                        {removeDoctype: true},
                        {removeMetadata: true},
                        {removeTitle: true},
                        {removeUselessStrokeAndFill: true},
                        {removeXMLNS: true}
                    ]
                },
                prefix: 'icon-'
            }),
            new ExtractTextPlugin({
                allChunks: true,
                filename: 'css/[name].bundle.min.css'
            })

            ,new webpack.LoaderOptionsPlugin({
                vue: {
                    loaders: {
                        scss: 'style!css!sass'
                    }
                }
            })
        ],
        resolve: {
            alias: {
                ui: path.resolve(__dirname, './src')
            },
            extensions: ['.js', '.jsx'],
            modules: ["node_modules", "spritesmith-generated"]
        }
    };

    if (env.production) {
        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            })
        );
/*        config.plugins.push(
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    drop_console: true,
                    warnings: false
                }
            })
        ); */
        config.plugins.push(
            new webpack.NoEmitOnErrorsPlugin()
        );
    }

    return config
};