import { pipeline } from 'node:stream/promises';
import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import * as path from 'node:path';

const FILE_PATH = path.resolve(import.meta.dirname, 'files', 'fileToCompress.txt')
const TARGET_PATH = path.resolve(import.meta.dirname, 'files', 'archive.gz')

const compress = async () => {
  const rstream = createReadStream(FILE_PATH)
  const wstream = createWriteStream(TARGET_PATH)
  await pipeline(rstream, createGzip(), wstream)
};

await compress();
