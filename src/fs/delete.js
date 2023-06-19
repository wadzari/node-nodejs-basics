import * as path from "node:path";
import { rm } from "node:fs/promises";
import { getDirname } from "../helpers.js";

const __dirname = getDirname(import.meta.url);
const deleteFilePath = path.join(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
  try {
    await rm(deleteFilePath);
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();
