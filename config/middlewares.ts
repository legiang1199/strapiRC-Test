export default [
  "strapi::logger",
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::poweredBy",
  {
    name: "strapi::cors",
    config: {
      header: [
        "Content-Type",
        "Authorization",
        "Origin",
        "X-Requested-With",
        "Accept",
      ],
      origin: ["https://h5.zdn.vn", "zbrowser://h5.zdn.vn"],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
    },
  },
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",

  // {
  //   name: "strapi::cors",
  //   config: {
  //     enable: true,
  //     origin: [
  //       "https://h5.zdn.vn",
  //       "zbrowser://h5.zdn.vn",
  //       "https://strapirc-test.onrender.com",
  //     ],
  //     methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
  //     allowedHeaders: ["Content-Type", "Authorization"],
  //     headers: [
  //       "X-Requested-With",
  //       "Content-Type, Authorization",
  //       "Referrer-Policy",
  //       "strict-origin-when-cross-origin",
  //     ],
  //     credentials: true, // Allow credentials (cookies, etc.)
  //   },
  // },
];
