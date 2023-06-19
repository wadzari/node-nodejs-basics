import { pipeline } from "node:stream/promises";
import { Transform } from "node:stream";
import { stdin, stdout } from "node:process";

const reverseString = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().trim().split("").reverse().join("") + "\n");
    callback();
  },
});

const transform = async () => {
  await pipeline(stdin, reverseString, stdout);
};

await transform();
