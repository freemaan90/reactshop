const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require("path")

module.exports = {
    entry: "./src/index.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename: "reactshop/bundle.js",
        publicPath:"/reactshop/"
    },
    resolve:{
        extensions:[".js",".jsx"],
        alias:{
            "@components": path.resolve(__dirname,"src/components/"),
            "@containers": path.resolve(__dirname,"src/containers/"),
            "@pages": path.resolve(__dirname,"src/pages/"),
            "@styles": path.resolve(__dirname,"src/styles/"),
            "@icons": path.resolve(__dirname,"src/assets/icons/"),
            "@logos": path.resolve(__dirname,"src/assets/logos/"),
            "@hooks": path.resolve(__dirname,"src/hooks/"),
            "@context": path.resolve(__dirname,"src/context/")
        }
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader',

                }
            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader:'html-loader'
                    }
                ]
            },
            {
                test:/\.(css|scss)$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test:/\.(jpg|png|svg|gif)$/,
                type: "asset"
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename:"[name].css"
        })
    ],
    mode:"development",
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
          },
        compress: true,
        port: 3005,
        historyApiFallback: true,
      }
}