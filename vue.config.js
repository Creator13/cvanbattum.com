"use strict";
/* eslint-disable prefer-const */
// vue.config.js
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var projects_1 = __importDefault(require("./src/assets/projects"));
var projectRoutes = projects_1["default"].map(function (p) { return "/projects/" + p.slug; });
/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.md$/i,
                    loader: "raw-loader"
                },
                // {
                //     test   : /\.scss$/,
                //     loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
                // },
                {
                    test: /.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                    use: "url-loader?limit=10000000"
                },
            ]
        }
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
};
