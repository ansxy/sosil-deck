/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  nextConfig,
  env: {
    MONGO_URI:
      "mongodb+srv://ansxy:ansar123@cluster0.am8frmk.mongodb.net/?retryWrites=true&w=majority",
  },
};
