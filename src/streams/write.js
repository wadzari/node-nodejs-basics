import * as path from "node:path";
import { pipeline } from "node:stream/promises";
import { createWriteStream } from "node:fs";
import { stdin } from "node:process";
import { getDirname } from "../helpers.js";

const __dirname = getDirname(import.meta.url);
const filePath = path.join(__dirname, "files", "fileToWrite.txt");

const write = async () => {
  await pipeline(stdin, createWriteStream(filePath));
};

await write();
