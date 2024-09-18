import { errors } from "@strapi/utils";
const { NotFoundError, ApplicationError } = errors;

export default {
  getZaloPhoneNumber: async (ctx, next) => {
    const endpoint = "https://graph.zalo.me/v2.0/me/info";
    const secretKey = process.env.ZALO_SECRET;

    try {
      const userAccessToken = ctx.request.headers["access-token"];
      const token = ctx.request.headers["token"];

      if (!userAccessToken) {
        throw new NotFoundError("Access token not found");
      }

      if (!token) {
        throw new NotFoundError("Token not found");
      }

      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          access_token: userAccessToken,
          code: token,
          secret_key: secretKey,
        },
      });

      // Check for successful response
      if (!response.ok) {
        throw new ApplicationError(
          `Failed to fetch Zalo info: ${response.statusText}`,
        );
      }

      const data = await response.json();
      ctx.body = data;
    } catch (err) {
      ctx.badRequest(err.message);

      return;
    }
  },
};
