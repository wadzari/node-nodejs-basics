import * as path from "node:path";
import { writeFile } from "node:fs/promises";
import { getDirname } from "../helpers.js";

const __dirname = getDirname(import.meta.url);
const filePath = path.join(__dirname, "files", "fresh.txt");

const create = async () => {
  try {
    await writeFile(filePath, "I am fresh and young", { flag: "wx" });
  } catch {
    throw new Error("FS operation failed");
  }
};

await create();
