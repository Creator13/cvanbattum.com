// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.md$/i,
                    loader: "raw-loader",
                },
                {
                    test: /.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                    use: "url-loader?limit=100000"
                }
            ],
        },
    },
};
