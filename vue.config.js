// vue.config.js

// import PrerenderSPAPlugin from "prerender-spa-plugin";
// const PrerenderSPAPlugin = require("prerender-spa-plugin")
// import path from "path";
// const path = require("path")
// import projects from "@/assets/projects";

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
        // plugins: [
        //     new PrerenderSPAPlugin({
        //         // Absolute path to compiled SPA
        //         staticDir: path.resolve(__dirname, 'dist'),
        //         // List of routes to prerender
        //         routes: ['/', '/projects', '/404'],
        //     }),
        // ]
    }
}
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

