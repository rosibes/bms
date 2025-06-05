/** @type {import('next').NextConfig} */
const nextConfig = {
    // Dezactivează verificarea tipurilor în timpul build-ului
    typescript: {
        ignoreBuildErrors: true,
    },
    // Dezactivează și linting-ul pentru a accelera și mai mult
    eslint: {
        ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;
