import { cpus } from "os";

import { Worker, workerData } from "worker_threads";

const numCores = cpus().length;

const performCalculations = async () => {
  try {
    const workers = [];
    for (let i = 0; i < numCores; i++) {
      workers.push(new Worker("./src/wt/worker.js", { workerData }));
    }
    for (let i = 0, j = 10; i < workers.length; i++, j++) {
      workers[i].postMessage({ num: j });
    }
    workers.forEach((worker) => {
      worker.on("error", (err) => {
        console.log(err);
      });
      worker.on("message", (data) => {
        console.log(`${data.num}th Fibonacci Number: ${data.result}`);
      });
    });
  } catch (err) {
    throw new Error("Operation failed  " + err);
  }
};

await performCalculations();
