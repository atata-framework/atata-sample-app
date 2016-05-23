/// <binding AfterBuild='Run - Development' />
module.exports = {
    //entry: ['./src/index.js', './node_modules/jquery/dist/jquery.min.js', './node_modules/bootstrap/dist/js/bootstrap.min.js'],
    entry: ['./src/index.js'],
    output: {
        path: __dirname + '/build/',
        publicPath: 'build/',
        filename: 'build.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.html$/, loader: "html" }
        ]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    }
};