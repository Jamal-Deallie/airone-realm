/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'res.cloudinary.com',
      'images.unsplash.com',
      'cdn.pixabay.com',
      'images.pexel.com',
    ],
  },
  env: {
    NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN:
      process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            memo: true,
            dimensions: false,
            svgoConfig: {
              multipass: true,
              plugins: [
                'removeDimensions',
                'removeOffCanvasPaths',
                'reusePaths',
                'removeElementsByAttr',
                'removeStyleElement',
                'removeScriptElement',
                'prefixIds',
                'cleanupIDs',
                {
                  name: 'cleanupNumericValues',
                  params: {
                    floatPrecision: 1,
                  },
                },
                {
                  name: 'convertPathData',
                  params: {
                    floatPrecision: 1,
                  },
                },
                {
                  name: 'convertTransform',
                  params: {
                    floatPrecision: 1,
                  },
                },
                {
                  name: 'cleanupListOfValues',
                  params: {
                    floatPrecision: 1,
                  },
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
