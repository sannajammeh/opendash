/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  experimental: {
    esmExternals: true,
    appDir: true,
    runtime: "edge",
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
    serverComponentsExternalPackages: [
      "swr",
      "swr/_internal",
      "trpc-swr",
      "trpc-swr/ssg",
    ],
  },
};
