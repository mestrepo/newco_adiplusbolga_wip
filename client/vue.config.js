module.exports = {
    lintOnSave: false,
    devServer: {
        port: 8080,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":
                "Origin, X-Requested-With, Content-Type, Accept",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE"
        },
        host: "0.0.0.0",
        // host: "localhost",
        disableHostCheck: true
    },
    transpileDependencies: [/node_modules[/\\\\]vuetify[/\\\\]/],
    pwa: {
        // configure the workbox plugin
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            swSrc: "src/firebase-messaging-sw.js"
        },
        appleMobileWebAppCapable: "yes",
        appleMobileWebAppStatusBarStyle: "default"
    },
    configureWebpack: {
        module: {
            rules: [
                {
                    exclude: /node_modules/,
                }
            ]
        },
        resolve: {
            alias: {
                vue$: "vue/dist/vue.esm.js" // 'vue/dist/vue.common.js' for webpack 1
            }
        }
    },
    publicPath: ".",
    productionSourceMap: true,
    css: {
        // Enable CSS source maps.
        sourceMap: process.env.NODE_ENV !== 'production'
    }
}
