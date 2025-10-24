import { createReadStream } from 'node:fs';
import path from 'node:path';
import { pipeline } from 'node:stream/promises';

const FILE_PATH = path.resolve(import.meta.dirname, 'files', 'fileToRead.txt');
const read = async () => {
  const stream = createReadStream(FILE_PATH, { encoding: 'utf8' })
  await pipeline(stream, process.stdout)
};

await read();
