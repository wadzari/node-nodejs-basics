import { cp } from 'node:fs/promises'
import path from 'node:path';

const FILE_PATH = path.resolve(import.meta.dirname, 'files');
const DEST_PATH = path.resolve(import.meta.dirname, 'files_copy');

const copy = async () => {
  try {
    await cp(FILE_PATH, DEST_PATH, {
      errorOnExist: true,
      force: false,
      recursive: true
    })
  } catch (err) {
    throw new Error('FS operation failed')
  }
};

await copy();
