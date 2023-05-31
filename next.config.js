/** @type {import('next').NextConfig} */

const path = require('path');

module.exports = {
    images: {
        unoptimized: true,
    },
    output: 'export',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
};
