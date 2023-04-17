import config from '../config';

import mysql from '../frameworks/databases/mysql';
import mongodb from '../frameworks/databases/mongodb';

import makeCspCreditRepository from './billing/cspCredit.repository';

let database = null;
switch (config.database.driver) {
  case 'mysql':
    database = mysql;
    break;
  case 'mongodb':
    database = mongodb;
    break;
  default:
    throw new Error('Not supported.');
}

const {
  cspCreditDb
} = database;

const cspCreditRepository = makeCspCreditRepository(cspCreditDb);

export {
  cspCreditRepository
};
