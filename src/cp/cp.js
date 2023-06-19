import { spawn } from "node:child_process";

import process from "node:process";

const spawnChildProcess = async (args) => {
  const child = spawn("node", ["./files/script.js", ...args]);
  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
  child.on("error", (err) => {
    console.error("Failed to start child process " + err);
  });
  child.on("exit", (code, signal) => {
    console.log(`Child process exited with code ${code} and signal ${signal}`);
  });
};

spawnChildProcess(/* [argument1 ,argument2 ] */);
