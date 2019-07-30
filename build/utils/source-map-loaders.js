module.exports = {
    getSourceMapsLoaders
}

function getSourceMapsLoaders () {
    return [
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'
        {
            enforce: 'pre',
            test: /\.js$/,
            loader: 'source-map-loader'
        },
    ]
}
