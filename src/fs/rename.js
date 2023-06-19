import * as path from "node:path";
import { access, rename as mv } from "node:fs/promises";
import { getDirname } from "../helpers.js";

const __dirname = getDirname(import.meta.url);
const oldPath = path.join(__dirname, "files", "wrongFilename.txt");
const newPath = path.join(__dirname, "files", "properFilename.md");
const noop = () => {};

const rename = async () => {
  try {
    await access(oldPath);
    await access(newPath).then(() => {
      throw new Error();
    }, noop);
    await mv(oldPath, newPath);
  } catch {
    throw new Error("FS operation failed");
  }
};

await rename();
