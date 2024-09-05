import { Context, Next } from "koa";

const allowedOrigins = ["https://h5.zdn.vn", "zbrowser://h5.zdn.vn"];

const customCorsMiddleware = async (ctx: Context, next: Next) => {
  const origin = ctx.request.header.origin;

  // Check if the origin is allowed
  const allowedCors = allowedOrigins.some(
    (element) => origin && origin.startsWith(element),
  );

  if (allowedCors) {
    ctx.set("Access-Control-Allow-Origin", origin);
    ctx.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    ctx.set(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE, OPTIONS",
    );
    ctx.set("Access-Control-Allow-Credentials", "true");
  }

  // Handle preflight requests
  if (ctx.method === "OPTIONS") {
    ctx.status = 204; // No Content
    return;
  }

  await next();
};

export default customCorsMiddleware;
