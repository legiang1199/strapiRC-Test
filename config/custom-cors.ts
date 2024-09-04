import { Context, Next } from "koa";

const allowedOrigins: string[] = ["https://h5.zdn.vn", "zbrowser://h5.zdn.vn"];

const customCors = async (ctx: Context, next: Next) => {
  const origin = ctx.request.headers.origin as string | undefined;

  if (
    origin &&
    allowedOrigins.some((allowedOrigin) => origin.startsWith(allowedOrigin))
  ) {
    ctx.set("Access-Control-Allow-Origin", origin);
    ctx.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  }

  // Continue to the next middleware
  await next();
};

export default customCors;
