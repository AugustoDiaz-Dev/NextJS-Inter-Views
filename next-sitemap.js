const siteUrl = "https://vercel.com/augustodiaz-dev/next-js-inter-views";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
