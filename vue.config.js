module.exports = {
    devServer: {
        proxy: 'http://localhost:5000'
        // proxy: {
        //     "^/api": {
        //         target: 'http://127.0.0.1:5000',
        //         ws: true,
        //         changeOrigin: true
        //     }
        // }
    }
};
