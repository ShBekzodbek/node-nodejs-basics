import { stdin, stdout } from "node:process";

import { createInterface } from "node:readline/promises";

import path from "node:path";

import { createWriteStream } from "node:fs";

import { once } from "node:events";

const rl = createInterface({
  input: stdin,
  output: stdout,
  
});

const write = async () => {
  const writableStream = createWriteStream(
    path.join("src", "streams", "files", "fileToWrite.txt")
  );
  try {
    await once(writableStream, "open");
    const input = await rl.question("Enter any input and ctrl + c to exit \n");
    writableStream.write(input);
    writableStream.close();
  } catch (err) {
    throw new Error("Writing with Steam Operation failed! " + err);
  }
};

await write();
