const withPWA = require("next-pwa");

module.exports = withPWA({
  images: {
    domains: ["localhost", "i.eurosport.com"],
  },
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
    swSrc: "service-worker.js",
  },
});
