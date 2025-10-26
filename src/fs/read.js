import { open } from 'node:fs/promises'
import path from 'node:path';

const FILE_PATH = path.resolve(import.meta.dirname, 'files');
const TARGET_FILE = path.resolve(FILE_PATH, 'fileToRead.txt');

const read = async () => {
  try {
    const fd = await open(TARGET_FILE)
    const data = await fd.readFile('utf8')
    console.log(data)
  } catch (err) {
    throw new Error('FS operation failed')
  }
};

await read();
