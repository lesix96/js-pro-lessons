const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

// даже с такой минимальной конфигурацией уже могут быть доступны импорты и экспорты в проекте
// module.exports = {
//     mode: 'development',
//     entry: './src/index.js',
//     output: {
//         path: path.join(__dirname, 'dist'),
//         filename: 'bundle.js',
//         publicPath: '/dist/',
//     }
// };

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: './index.js',
    },
    devServer: {
        port: 9000,
        open: true,
        hot: isDev
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]-[fullhash].bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.tsx', '.ts', '.jsx'],
        alias: {
            '@images': path.resolve(__dirname, 'src/assets/images')
        },
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            favicon: path.resolve(__dirname, 'src/assets/images/favicon.png'),
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(otf|ttf|eot|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[hash].min[ext]',
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[hash].min[ext]',
                },
            },
            {
                test: /\.txt/,
                type: 'asset/resource',
            },
            {
                test: /\.xml/,
                type: 'asset/resource',
            },
            {
                test: /\.csv/,
                type: 'asset/resource',
            },
            {
                test: /\.pdf/,
                type: 'asset/resource',
            },
            {
                test: /\.html/,
                type: 'asset/resource',
                exclude: path.resolve(__dirname, 'src/index.html'),
            }
        ]
    }
};
