/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // 기존 설정...
    
    // `TextEncoder` 오류를 해결하기 위한 설정 추가
    config.node = {
      ...config.node,
      global: true,
    };

    // 기존 설정...

    return config;
  },
}

module.exports = nextConfig
