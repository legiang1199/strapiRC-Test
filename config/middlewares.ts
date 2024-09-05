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
    name: "strapi::cors",
    config: {
      enable: true,
      origin: [
        "https://h5.zdn.vn",
        "zbrowser://h5.zdn.vn", // Ensure this is a valid URL
      ],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
      headers: [
        "Content-Type",
        "Authorization",
        "X-Requested-With",
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization",
      ],
      credentials: true, // Allow credentials (cookies, etc.)
    },
  },
];
