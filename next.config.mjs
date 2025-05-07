/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 如果你的网站不是部署在域名根目录，而是在子目录（如 username.github.io/repo-name），
  // 则需要添加 basePath 配置
  // basePath: '/your-repo-name',
}

export default nextConfig
