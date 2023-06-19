import { readdir } from "fs/promises";

import path from "path";

const list = async () => {
    try {
      const list = await readdir(path.join("src", "fs", "files"));
      console.log(list);
    } catch (err) {
        throw new Error("FS operation failed " + err);
    }
};

await list();
