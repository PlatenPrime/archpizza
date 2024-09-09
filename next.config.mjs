/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',  // Разрешает все пути для данного хоста
            },

            {
                protocol: 'https',
                hostname: 'sharik.ua',
                port: '',
                pathname: '/**',  // Разрешает все пути для данного хоста
            },

        ],
    },
};

export default nextConfig;
