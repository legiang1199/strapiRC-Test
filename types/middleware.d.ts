declare module "src/middlewares/custom-cors" {
  import { Context, Next } from "koa";
  const customCorsMiddleware: (ctx: Context, next: Next) => Promise<void>;
  export default customCorsMiddleware;
}
