import * as path from "node:path";
import { cpus } from "node:os";
import { Worker } from "node:worker_threads";
import { getDirname } from "../helpers.js";

const __dirname = getDirname(import.meta.url);
const filePath = path.join(__dirname, "worker.js");

const performCalculations = async () => {
  const coresNumber = cpus().length;
  const workers = [];

  for (let i = 10; i < coresNumber + 10; i++) {
    workers.push(
      new Promise((resolve, reject) => {
        const worker = new Worker(filePath, { workerData: i });
        worker.on("message", resolve);
        worker.on("error", reject);
        worker.on("exit", (code) => {
          if (code !== 0)
            reject(new Error(`Worker stopped with exit code ${code}`));
        });
      })
    );
  }

  const results = await Promise.allSettled(workers).then((data) => {
    return data.map(({ status, value }) => {
      if (status === "fulfilled") {
        return {
          status: "resolved",
          data: value,
        };
      } else {
        return {
          status: "error",
          data: null,
        };
      }
    });
  });

  console.log(results);
};

await performCalculations();
