var HtmlWebpackPluign = require('html-webpack-plugin')

module.exports = {
    entry: "./src/app/main.ts",
    resolve: {
        extensions: [".js", ".ts"]
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loaders: ["html-loader"]
            },
            {
                test: /\.css$/,
                loaders: ["to-string-loader", "css-loader"]
            }
        ],
        exprContextCritical: false
    },
    plugins: [
         new HtmlWebpackPluign({
             template: 'src/index.html'
         })
    ]
}