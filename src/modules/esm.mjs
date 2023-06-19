import * as path from "node:path";
import { release, version } from "node:os";
import { createServer as createServerHttp } from "node:http";
import { getDirname, getFilename } from "../helpers.js";
import "./files/c.js";

const __dirname = getDirname(import.meta.url);
const __filename = getFilename(import.meta.url);

const random = Math.random();

let unknownObject;
let myServer;

if (random > 0.5) {
  unknownObject = await import("./files/a.json", {
    assert: { type: "json" },
  }).then((module) => module.default);
} else {
  unknownObject = await import("./files/b.json", {
    assert: { type: "json" },
  }).then((module) => module.default);
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export default { unknownObject, myServer };
