import config from './config/index';

import loaders from './loaders';
import express from 'express';

async function startServer() {
  const app = express();
  loaders(app);

  app.listen(config.port, () => {
    console.info(`Server start : ${config.port}`);
  }).on('error', err => {
    console.error(err);
    process.exit(1);
  });
}


startServer();

