const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { join } = require("path");


module.exports = {
    entry: "./source/index.js",
    output: {
        path: join(__dirname, "public/assets"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: join(__dirname, "public"),
        publicPath: "/assets/"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["react", "env"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader?modules=true&localIdentName='[path][name]__[local]--[hash:base64:5]'"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("bundle.css")
    ]
};
