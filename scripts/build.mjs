import { copyFile, mkdir } from "node:fs/promises";

await mkdir("public/src", { recursive: true });
await copyFile("src/cart.js", "public/src/cart.js");