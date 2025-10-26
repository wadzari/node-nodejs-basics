import { readdir } from 'node:fs/promises'
import path from 'node:path';

const FILE_PATH = path.resolve(import.meta.dirname, 'files');

const list = async () => {
  try {
    const files = await readdir(FILE_PATH, {
      withFileTypes: true,
      recursive: true
    })

    for (let file of files) {
      console.log(file.name)
    }
  } catch (error) {
    throw new Error('FS operation failed')
  }
};

await list();
