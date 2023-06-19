
const parseEnv = () => {
    for (let v in process.env) {
      if (v.startsWith("RSS_")) {
        console.log(`${v} = ${process.env[v]}`);
      }
    }
};

parseEnv();