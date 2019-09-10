const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const env = process.env.ENVIRONMENT

const output = env === 'dev' ? {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
} : {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
}

module.exports = {
    entry: env === 'dev' ? './example/index.js' : './src/index.js',
    output,
    devServer: {
        port: 3600,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            reacttable: path.join(__dirname, '/node_modules/react-table/react-table.css'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                },
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: { modules: true },
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.(png|gif|jpg|jpeg|mp3|mp4|xlsx|docx|pdf|csv)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[hash].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './example/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: './styles/[name].css',
        }),
    ],
}
