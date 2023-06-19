import * as path from "node:path";
import { pipeline } from "node:stream/promises";
import { createReadStream } from "node:fs";
import { stdout } from "node:process";
import { getDirname } from "../helpers.js";

const __dirname = getDirname(import.meta.url);
const filePath = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  await pipeline(createReadStream(filePath), stdout);
};

await read();
