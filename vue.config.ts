/* eslint-disable prefer-const */
// vue.config.js

import projects from './src/assets/projects';

const projectRoutes = projects.map(p => `/projects/${p.slug}`);

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
                // {
                //     test   : /\.scss$/,
                //     loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
                // },
                {
                    test: /.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                    use: "url-loader?limit=100000"
                },
            ],
        },
    },
    pluginOptions: {
        prerenderSpa: {
            registry: undefined,
            renderRoutes: [
                '/',
                '/projects',
                '/404',
            ].concat(projectRoutes),
            useRenderEvent: true,
            headless: true,
            onlyProduction: true
        }
    }
}
