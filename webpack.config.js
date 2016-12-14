module.exports = {
    entry: "./js/isomer.js",
    output: {
        path: __dirname + "/dist",
        filename: "isomer.reservat.js",
        library: "Isomer", 
        libraryTarget: "umd",
        umdNamedDefine: true,
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};