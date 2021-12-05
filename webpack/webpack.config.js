const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap(({env}) => {
    const config = require(`./webpack.${env}.js`);

    return merge(common, config);
});
