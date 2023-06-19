import * as path from "node:path";
import { createReadStream } from "node:fs";
import { stdout } from "node:process";
const { createHash } = await import("node:crypto");
import { getDirname } from "../helpers.js";

const hash = createHash("sha256");

const __dirname = getDirname(import.meta.url);
const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  const input = createReadStream(filePath);
  input.pipe(hash).setEncoding("hex").pipe(stdout);
};

await calculateHash();
