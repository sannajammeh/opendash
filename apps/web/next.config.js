/**
 * @type {import('next').NextConfig}
 */
// module.exports = {
//   reactStrictMode: true,
//   transpilePackages: ["@openbase/ui", "@openbase/hooks"],
//   experimental: {
//     esmExternals: true,
//     appDir: true,
//     fontLoaders: [
//       { loader: "@next/font/google", options: { subsets: ["latin"] } },
//     ],
//   },
// };

module.exports = {
  transpilePackages: ["@openbase/ui", "@openbase/hooks"],
  reactStrictMode: true,
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
};
