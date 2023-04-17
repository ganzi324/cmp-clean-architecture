import * as express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import router from '../frameworks/server/express/routes';
import config from '../config';

const __dirname = path.resolve();

export default (app) => {
  app.use(logger('dev'));
  // Request의 payload를 json으로 파싱한다.
  // Header의 Content-Type이 option의 type과 일치하는 요청만 처리한다.
  app.use(express.json(config.express.json.options));
  app.use(express.urlencoded(config.express.urlencoded.options));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));
  router(app);

  return app;
};