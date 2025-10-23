import { argv } from 'node:process'

const parseEnv = () => {
  argv.forEach((arg) => {
    if (arg.startsWith('RSS_')) {
      console.log(arg)
    }
  })
};

parseEnv();
