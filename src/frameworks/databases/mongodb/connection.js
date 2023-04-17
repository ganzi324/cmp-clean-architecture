import mongoose from 'mongoose';
import config from '../../../config';

export default () => {
  const connections = {};

  const connect = () => {
    const databases = config.database;
  };

  const createConnection = () => {

  };

  const disconnectAll = () => {

  };

  return {
    connect
  };
};

import MongoDB from 'mongodb';

const MongoClient = MongoDB.MongoClient;
const url = process.env.MONGODB_URL;

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  const dbo = db.db(process.env.MONGODB_DBNAME);
  dbo.createCollection('customer', function (err, res) {
    if (err) throw err;
    console.log('Collection created!');
    db.close();
  });
});

