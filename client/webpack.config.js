var path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build/'),
        filename: 'bundle.js'
    },
    loader: {
        presets: ['es2015', 'react-router-dom', 'react']
    },
};
