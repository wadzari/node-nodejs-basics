import * as path from "node:path";
import { pipeline } from "node:stream/promises";
import { createReadStream, createWriteStream } from "node:fs";
import { createGunzip } from "node:zlib";

import { getDirname } from "../helpers.js";

const __dirname = getDirname(import.meta.url);
const sourceFilePath = path.join(__dirname, "files", "archive.gz");
const destFilePath = path.join(__dirname, "files", "fileToCompress.txt");

const decompress = async () => {
  await pipeline(
    createReadStream(sourceFilePath),
    createGunzip(),
    createWriteStream(destFilePath)
  );
};

await decompress();
