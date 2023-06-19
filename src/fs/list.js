import * as path from "node:path";
import { readdir } from "node:fs/promises";
import { getDirname } from "../helpers.js";

const __dirname = getDirname(import.meta.url);
const folderPath = path.join(__dirname, "files");

const list = async () => {
  try {
    const files = await readdir(folderPath);
    console.log(files);
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();
