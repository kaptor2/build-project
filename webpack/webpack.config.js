const {merge} = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const common = require('./webpack.common.js');

module.exports = ({env}) => {
    const configName = env === 'storybook' ? 'dev' : env;
    const config = require(`./webpack.${configName}.js`);

    config.plugins.push(
        new Dotenv({
            path: `./env/${env}.env`,
        }),
    );

    return merge(common, config);
};
