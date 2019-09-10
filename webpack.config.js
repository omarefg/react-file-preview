const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const autoprefixer = require('autoprefixer')

const env = process.env.ENVIRONMENT

const output = env === 'dev' ? {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
} : {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    library: ['FilePreview'],
    libraryTarget: 'umd',
}

const plugins = env === 'dev' ? [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './example/index.html'),
        filename: './index.html',
    }),
    new MiniCssExtractPlugin({ filename: './[name].[hash].css' }),
] : [new MiniCssExtractPlugin({ filename: './[name].[hash].css' })]

const jsJsxRule = env === 'dev' ? {
    test: /\.(js|jsx)$/,
    exclude: '/node_modules/',
    use: {
        loader: 'babel-loader',
    },
} : {
    test: /\.(js|jsx)$/,
    exclude: '/node_modules/',
    include: path.resolve(__dirname, './src'),
    loader: 'babel-loader',
    options: {
        cacheDirectory: true,
    },
}

const externals = env === 'dev' ? [] : [
    {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
        },
    },
    {
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom',
        },
    },
]

module.exports = {
    entry: env === 'dev' ? path.resolve(__dirname, './example/index.js') : path.resolve(__dirname, './src/index.js'),
    output,
    devServer: { port: 3600 },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    externals,
    module: {
        rules: [
            jsJsxRule,
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                },
            },
            {
                test: /\.scss$/,
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
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                autoprefixer(),
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                autoprefixer(),
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.(gif|jpg|jpeg|mp3|mp4|xlsx|docx|pdf|csv)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[hash].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.png$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                },
            },
        ],
    },
    plugins,
}
