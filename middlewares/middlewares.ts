import { Strapi } from "@strapi/strapi";

const middlewares: Strapi.MiddlewareConfig = {
  settings: {
    cors: {
      enabled: true,
      origin: "*", // Default CORS setting, can be overridden by custom middleware
    },
  },
  load: {
    before: ["custom-cors"], // Ensure your middleware is loaded before default middlewares
    order: ["custom-cors"], // Order of middleware application
  },
};

export default middlewares;
