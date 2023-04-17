import dotenv from 'dotenv';

const envFound = dotenv.config();
if (envFound.error) {
  throw envFound.error;
}

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

export default {
  port: parseInt(process.env.PORT, 10),
  database: {
    mongodb: {
      url: process.env.MONGODB_URL,
      username: process.env.MONGODB_USERNAME,
      password: process.env.MONGODB_PASSWORD
    }
  },
  express: {
    json: {
      options: {
        limit: '10mb'
      }
    },
    urlencoded: {
      options: {
        limit: '10mb'
      }
    }
  }

};