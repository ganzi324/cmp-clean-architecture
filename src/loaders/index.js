import expressLoader from './express';
import databaseLoader from './database';

export default async (expressApp) => {
  expressLoader(expressApp);
  databaseLoader();
};