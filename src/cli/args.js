import { argv } from "node:process";

const parseArgs = () => {
  const res = [];
  const args = argv.slice(2);

  for (let i = 0; i < args.length - 1; i += 2) {
    res.push(`${args[i].slice(2)} is ${args[i + 1]}`);
  }

  console.log(res.join(", "));
};

parseArgs();
