import { writeFile } from "fs/promises";

import path from "path";

const create = async () => {
  try {
    let content = "I am fresh and young";
    await writeFile(
      path.join("./src/fs/files", "fresh.txt"),
      "I am fresh young"
    );
  } catch (err) {
    throw new Error("Creating file failed" + " " + err);
  }
};

await create();
