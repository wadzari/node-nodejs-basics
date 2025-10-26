import { open } from 'node:fs/promises'
import path from 'node:path';

const FILE_PATH = path.resolve(import.meta.dirname, 'files', 'fresh.txt');

const create = async () => {
  try {
    const fd = await open(FILE_PATH, 'ax')
    fd.appendFile('I am fresh and young')
  } catch (error) {
    throw new Error('FS operation failed')
  }
};

await create();
