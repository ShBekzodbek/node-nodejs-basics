import { unlink } from "fs/promises";
import path from "path";

const remove = async () => {
    try {
       await unlink(path.join("src/fs",'files','fileToRemove.txt'))
    } catch (err) {
        throw new Error("FS operation failed " + err);
    }
};

await remove();
