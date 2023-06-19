import { createGzip } from "node:zlib";
import fs from "fs";
import { pipeline } from "stream/promises";
import path from "node:path";

const compress = async () => {
  try {
  let gzip  = createGzip();
  let r = fs.createReadStream(
    path.join("src", "zip", "files", "fileToCompress.txt")
  );
  let w = fs.createWriteStream(path.join("src", "zip", "files", "archive.gz"));
  await pipeline(r, gzip, w);
  } catch (err) {
    throw new Error("Operation failed" + err);
  }
};

await compress();
