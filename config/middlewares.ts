export default [
  "strapi::logger",
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    settings: {
      cors: {
        enabled: true,
        origin: "*", // You may still want to enable default CORS settings
      },
    },
    load: {
      before: ["custom-cors"], // Ensure custom-cors middleware is loaded before default middlewares
      order: ["custom-cors"], // Ensure it’s ordered correctly
    },
  },
];
