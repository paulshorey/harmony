// import cconsole from "@ps/cconsole";
import requestText from "./src/lib/requestResponse/fetch/text.js";
import { Router } from "itty-router";

const router = Router();

router.get("/", () => {
  return new Response("Hello, world! This is a response from a CloudFlare worker.");
});
router.get("/fetch-text", (request) => {
  return requestText(request);
});
router.all("*", () => new Response("404, not found!", { status: 404 }));

addEventListener("fetch", (e) => {
  e.respondWith(router.handle(e.request));
});
