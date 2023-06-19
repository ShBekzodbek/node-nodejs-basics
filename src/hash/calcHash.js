import { createHmac } from 'node:crypto';

import { readFile } from "node:fs/promises";

import path from "path";


const calculateHash = async () => {
    try {
      const text = await readFile(
        path.join("src", "hash", "files", "fileToCalculateHashFor.txt"),
        { encoding: "utf-8" }
      );
      const secret = "abcdefg";
      const hash = createHmac("sha256", secret).update(text).digest("hex");
      console.log(hash);
    } catch (err) {
        throw new Error("FS operation failed " + err);
    }
};

await calculateHash();