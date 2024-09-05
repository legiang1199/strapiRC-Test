module.exports = [
  // Default middlewares
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",

  // Custom middlewares
  {
    name: "custom-cors",
    resolve: "./src/middlewares/custom-cors",
  },
];
