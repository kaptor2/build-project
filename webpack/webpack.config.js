const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = ({env}) => {
    const config = require(`./webpack.${env}.js`);
    return merge(common, config);
}