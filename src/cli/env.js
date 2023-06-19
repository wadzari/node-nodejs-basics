const parseEnv = () => {
  const res = [];
  const envMap = process.env;

  for (let key of Object.keys(envMap)) {
    if (key.startsWith("RSS_")) {
      res.push(`${key}=${envMap[key]}`);
    }
  }

  console.log(res.join("; "));
};

parseEnv();
