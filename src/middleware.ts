import { authMiddleware } from "@kinde-oss/kinde-auth-nextjs/server";

export const config = {
  matcher: ["/:path", "/auth-callback"],
};

export default authMiddleware;
