const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'public', 'index.js'),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    target: 'web',
    mode: 'development',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        '@babel/preset-env',
                    ],
                },
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        port: 8080,
    },
};
