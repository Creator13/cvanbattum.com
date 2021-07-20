"use strict";
/* eslint-disable prefer-const */
// vue.config.js
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
// import PrerenderSPAPlugin from "prerender-spa-plugin";
// const PrerenderSPAPlugin = require("prerender-spa-plugin")
// import path from "path";
// const path = require("path")
// eslint-disable-next-line @typescript-eslint/no-var-requires
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
                {
                    test: /.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                    use: "url-loader?limit=100000"
                }
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
// module.exports = {
//     baseUrl: '/testBaseUrl',
//     outputDir: path.join(__dirname, 'dist/testBaseUrl'),
//     configureWebpack: {
//         module: {
//             rules: [
//                 {
//                     test: /\.md$/i,
//                     loader: "raw-loader",
//                 },
//                 {
//                     test: /.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
//                     use: "url-loader?limit=100000"
//                 }
//             ],
//         },
//         plugins: [
//             new PrerenderSPAPlugin({
//                 staticDir: path.join(__dirname, 'dist'),
//                 outputDir: path.join(__dirname, 'dist/testBaseUrl'),
//                 indexPath: path.join(__dirname, 'dist', '/testBaseUrl/index.html'),
//                 routes: [
//                     '/',
//                     '/projects',
//                 ],
//             }),
//         ],
//     },
// };
