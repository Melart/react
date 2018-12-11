const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    // entry: {
    //     'js/bundle.js': './src/index.js', 
    //     'css/main.css': './src/style.css'
    // },
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    mode: 'none',
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                  })
                // use: [
                //     { loader: "style-loader" },
                //     { loader: "css-loader" }
                // ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("bundle.css"),
      ]
    
}