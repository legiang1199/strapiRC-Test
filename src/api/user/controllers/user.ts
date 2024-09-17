import { errors } from "@strapi/utils";
const { NotFoundError } = errors;

export default {
  getZaloPhoneNumber: async (ctx, next) => {
    const endpoint = "https://graph.zalo.me/v2.0/me/info";
    const secretKey = process.env.ZALO_SECRET;
    try {
      const userAccessToken = ctx.request.headers["access-token"];
      const token = ctx.request.headers["token"];

      if (!userAccessToken) {
        throw new NotFoundError("access token not found");
      }

      if (!token) {
        throw new NotFoundError("token not found");
      }

      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          ContentTypes: "application/json",
          access_token: userAccessToken,
          code: token,
          secret_key: secretKey,
        },
      });
      ctx.body = await response.json();
    } catch (err) {
      ctx.body = err;
    }
  },
};
