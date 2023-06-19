
import { readFile } from "fs/promises";

import path from "path";

 const read = async () => {
    try {
       const data = await readFile(
         path.join("src", "fs", "files", "fileToRead.txt"),
         { encoding: "utf-8" }
       );
       console.log(data);
    } catch (err) {
        throw new Error("FS operation failed " + err);
    }
};

await read();


