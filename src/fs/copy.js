import { cp } from "fs/promises";

const copy = async () => {
  try {
    await cp("./src/fs/files", "./src/fs/files_copy", { recursive: true });
  } catch (err) {
    throw new Error("FS operation failed " + err);
  }
};

await copy();
