import { rm } from 'node:fs/promises'
import path from 'node:path';

const FILE_PATH = path.resolve(import.meta.dirname, 'files');
const TARGET_FILE = path.resolve(FILE_PATH, 'fileToRemove.txt');

const remove = async () => {
  try {
    await rm(TARGET_FILE)
  } catch (error) {
    throw new Error('FS operation failed')
  }
};

await remove();
