import { neon } from "@neondatabase/serverless";
import type { AppLoadContext } from "react-router";

export function getDb(context: AppLoadContext) {
  return neon(context.cloudflare.env.DATABASE_URL);
}
