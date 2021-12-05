const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const {merge} = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const common = require('./webpack.common.js');

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap(({env}) => {
    const configName = env === 'storybook' ? 'dev' : env;
    const config = require(`./webpack.${configName}.js`);

    config.plugins.push(
        new Dotenv({
            path: `./env/${env}.env`,
        }),
    );

    return merge(common, config);
});
