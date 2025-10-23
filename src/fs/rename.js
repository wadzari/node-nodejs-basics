import * as fs from 'node:fs/promises'
import path from 'node:path';

const FILE_PATH = path.resolve(import.meta.dirname, 'files');
const TARGET_FILE = path.resolve(FILE_PATH, 'wrongFilename.txt');
const CORRECT_FILE = path.resolve(FILE_PATH, 'properFilename.md');

const rename = async () => {
  try {
    await fs.access(CORRECT_FILE, fs.constants.R_OK)
    throw new Error('FS operation failed')
  } catch (error) {
    if (error.code === 'ENOENT') {
      try {
        await fs.rename(TARGET_FILE, CORRECT_FILE)
      } catch (error) {
        throw new Error('FS operation failed')
      }
    } else {
      throw error
    }
  }
};

await rename();
