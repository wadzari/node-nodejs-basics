import { pipeline } from 'node:stream/promises';
import { Transform } from 'node:stream';

const reverse = new Transform({
  transform(data, _, cb) {
    this.push(data.toString().split('').reverse().join(''));
    this.push('\n');
    cb();
  },
});

const transform = async () => {
  await pipeline(process.stdin, reverse, process.stdout)
};

await transform();
