/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    nextScriptWorkers: true,
  },
  images: {
    domains: [
      process.env.NEXT_PUBLIC_API_URL.match(/(?!(w+)\.)\w*(?:\w+\.)+\w+/)[0], // Valid WP Image domain.
      "0.gravatar.com",
      "1.gravatar.com",
      "2.gravatar.com",
      "secure.gravatar.com",
    ],
  },
};
