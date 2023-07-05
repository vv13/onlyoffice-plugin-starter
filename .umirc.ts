import { defineConfig } from "umi";

export default defineConfig({
  routes: [{ path: "*", component: "index" }],
  hash: true,
  npmClient: "pnpm",
  outputPath: "onlyoffice-plugin-starter",
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  headScripts: ["./resources/plugins.js", "./resources/plugins-ui.js"],
  links: [{ href: "./resources/plugins.css" }],
});
