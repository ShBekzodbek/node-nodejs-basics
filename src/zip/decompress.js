import { createGunzip } from "node:zlib";

import fs from "fs";

import { pipeline } from "stream/promises";

import path from "node:path";

const decompress = async () => {
  try {
  let gunzip  = createGunzip();
  let r = fs.createReadStream(
    path.join("src", "zip", "files", "archive.gz")
  );
  let w = fs.createWriteStream(
    path.join("src", "zip", "files", "fileToCompress.txt")
  );
  await pipeline(r, gunzip, w);
  } catch (err) {
    throw new Error("Operation failed" + err);
  }
};





await decompress();