import * as path from "node:path";
import { pipeline } from "node:stream/promises";
import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";

import { getDirname } from "../helpers.js";

const __dirname = getDirname(import.meta.url);
const sourceFilePath = path.join(__dirname, "files", "fileToCompress.txt");
const destFilePath = path.join(__dirname, "files", "archive.gz");

const compress = async () => {
  await pipeline(
    createReadStream(sourceFilePath),
    createGzip(),
    createWriteStream(destFilePath)
  );
};

await compress();
