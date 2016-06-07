/// <binding AfterBuild='Run - Development' />
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: __dirname + '/build/',
        filename: 'build.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.html$/, loader: "html" },
            { test: /\.css$/, loader: ExtractTextPlugin.extract("css-loader") },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass') },
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.(woff|woff2)$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf$/, loader: "file-loader" },
            { test: /\.eot$/, loader: "file-loader" },
            { test: /\.svg$/, loader: "file-loader" }
        ]
    },
    plugins: [
        new ExtractTextPlugin('build.css', { allChunks: true })
    ],
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    }
}