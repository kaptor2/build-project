const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.STAND': JSON.stringify('prod'),
        }),
        new Dotenv({
            path: `./env/${env}.env`,
        }),
    ],
};
