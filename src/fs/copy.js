import * as path from "node:path";
import { cp, access } from "node:fs/promises";
import { getDirname } from "../helpers.js";

const __dirname = getDirname(import.meta.url);
const srcPath = path.join(__dirname, "files");
const destPath = path.join(__dirname, "files_copy");

const copy = async () => {
  try {
    await access(srcPath);
    await cp(srcPath, destPath, {
      errorOnExist: true,
      force: false,
      recursive: true,
    });
  } catch {
    throw new Error("FS operation failed");
  }
};

await copy();
