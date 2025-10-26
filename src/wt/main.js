import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';
import * as path from 'node:path'

const WORKER_PATH = path.resolve(import.meta.dirname, 'worker.js')

async function createWorkerThreads() {
  const numCPUs = cpus().length;
  const workers = [];
  const results = [];

  const workerPromises = Array.from({ length: numCPUs }, (_, i) => {
    return new Promise((resolve) => {
      const workerNumber = 10 + i;
      const worker = new Worker(WORKER_PATH);

      workers.push(worker);

      worker.on('message', (message) => {
        if (message.status === 'success') {
          resolve({
            status: 'resolved',
            data: message.data
          });
        } else {
          resolve({
            status: 'error',
            data: null,
          });
        }
      });

      worker.on('error', (error) => {
        resolve({
          status: 'error',
          data: null,
          error: error.message
        });
      });

      worker.on('exit', (code) => {
        if (code !== 0) {
          resolve({
            status: 'error',
            data: null,
            error: `Worker stopped with exit code ${code}`
          });
        }
      });

      worker.postMessage(workerNumber)
    });
  });

  const workerResults = await Promise.all(workerPromises);

  results.push(...workerResults);

  workers.forEach(worker => {
    worker.terminate();
  });

  return results;
}

const performCalculations = async () => {
  const results = await createWorkerThreads();
  console.log(results)
};

await performCalculations();
