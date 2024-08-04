/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_ADMIN_PASS_KEY: process.env.NEXT_ADMIN_PASS_KEY
    }
};

export default nextConfig;
