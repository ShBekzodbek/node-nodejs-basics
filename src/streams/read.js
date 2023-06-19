import { stdout } from "node:process";

import { createReadStream } from "fs";

import path from "node:path";


const read = async () => {
     try {
      let readable = createReadStream(
        path.join("src", "streams", "files", "fileToRead.txt")
      ).setEncoding("utf8");
     let data = '';
     for await (const chunk of readable) {
       data += chunk;
     }
     stdout.write(data);
     } catch (err) {
      throw new Error("Stream Operation failed " + err);
     }

};

await read();
