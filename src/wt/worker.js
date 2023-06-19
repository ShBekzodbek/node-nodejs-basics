import { parentPort } from "node:worker_threads";

// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  try {
    parentPort.on("message", (data) => {
      parentPort.postMessage({ result: nthFibonacci(data.num), num: data.num });
    });
  } catch (err) {
    throw new Error("Operation failed " + err);
  }
};

sendResult();
