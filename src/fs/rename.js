import { rename as Rename } from "fs/promises";

import path from "path";

const rename = async () => {
  try {
    await Rename(
      path.join("src/fs", "files", "wrongFilename.txt"),
      path.join("src/fs", "files", "properFilename.md")
    );
  } catch (err) {
    throw new Error("FS operation failed " + err);
  }
};

await rename();
