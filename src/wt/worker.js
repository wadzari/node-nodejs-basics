import { parentPort } from 'node:worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

parentPort.on('message', (data) => {
  try {
    const result = nthFibonacci(data);
    parentPort.postMessage({
      status: 'success',
      data: result
    });
  } catch (error) {
    parentPort.postMessage({
      status: 'error',
      error: error.message
    });
  }
});
