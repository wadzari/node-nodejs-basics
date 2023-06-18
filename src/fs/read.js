import * as path from "node:path";
import { readFile } from "node:fs/promises";
import { getDirname } from "../helpers.js";

const __dirname = getDirname(import.meta.url);
const filePath = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  try {
    const fileContent = await readFile(filePath, "utf-8");
    console.log(fileContent);
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();
