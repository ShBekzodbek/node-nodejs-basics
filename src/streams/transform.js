import { Transform } from "node:stream";

import { pipeline } from "stream/promises";

const transform = async () => {
try{ 
     const reverseText = new Transform({
       async transform(chunk, encoding, callback) {
         const text = chunk.toString();
         const reversed = text.split("").reverse().join("");
         this.push(reversed);
         callback();
       },
     });
  await pipeline(
    process.stdin,
    reverseText,
    process.stdout
  );
}catch(err){
    throw new Error("Operation failed! " + err);
}
};

await transform();
