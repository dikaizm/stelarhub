/** @type {import('next').NextConfig} */

import path from 'path';

const nextConfig = {
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
            },
        ],
    },
    sassOptions: {
        includePaths: ['styles'],
    },
};

export default nextConfig;
