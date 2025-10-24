import { createWriteStream } from 'node:fs';
import path from 'node:path';
import { pipeline } from 'node:stream/promises';

const FILE_PATH = path.resolve(import.meta.dirname, 'files', 'fileToWrite.txt');

const write = async () => {
  const stream = createWriteStream(FILE_PATH, { encoding: 'utf8' })
  await pipeline(process.stdin, stream)
};

await write();
