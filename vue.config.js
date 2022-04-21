const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true
})

// vue.config.js
// module.exports = {
//     // options...
//     devServer: {

//         proxy: {
//             "^/api": {
//                 target: 'https://patient-service-api.herokuapp.com',
//                 ws: true,
//                 changeOrigin: true
//             }
//         }
//     }
// }