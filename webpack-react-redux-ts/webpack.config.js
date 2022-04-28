// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const HTMLWebpackPlugin = require("html-webpack-plugin");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require("webpack");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const TerserWebpackPlugin = require("terser-webpack-plugin");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ESLintPlugin = require("eslint-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all",
    },
  };

  if (!isDev) {
    config.minimizer = [
      new TerserWebpackPlugin(),
      new CssMinimizerPlugin({
        test: /\.css$/i,
      }),
    ];
  }

  if (isDev) {
    config.minimizer = [
      new ESLintPlugin(),
    ];
  }

  return config;
};

console.log({ isDev });

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
  context: path.resolve(__dirname, "src"),
  entry: {
    main: "./index.js",
  },
  devServer: {
    port: 9000,
    open: true,
    hot: isDev,
  },
  devtool: isDev ? "source-map" : "",
  output: {
    path: path.join(__dirname, "dist"),
    filename: filename("js"),
  },
  resolve: {
    extensions: [".js", ".tsx", ".ts", ".jsx"],
    alias: {
      "@images": path.resolve(__dirname, "src/assets/images"),
    },
  },
  optimization: optimization(),
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /[\\/]node_modules[\\/]/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(otf|ttf|eot|woff|woff2|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[hash].min[ext]",
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[hash].min[ext]",
        },
      },
      {
        test: /\.txt/,
        type: "asset/resource",
      },
      {
        test: /\.xml/,
        type: "asset/resource",
      },
      {
        test: /\.csv/,
        type: "asset/resource",
      },
      {
        test: /\.pdf/,
        type: "asset/resource",
      },
      {
        test: /\.html/,
        type: "asset/resource",
        exclude: path.resolve(__dirname, "src/index.html"),
      },
      // {
      //     test: /\.js$/,
      //     exclude: /node_modules/,
      //     use: ['babel-loader'],
      // },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
      favicon: path.resolve(__dirname, "src/assets/images/favicon.png"),
      inject: true,
      minify: {
        collapseWhitespace: !isDev,
      },
    }),
    new CleanWebpackPlugin(),
    process.env.NODE_ENV === "development" && new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: filename("css"),
    }),
  ].filter((n) => n),
};
