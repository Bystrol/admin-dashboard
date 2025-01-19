import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_DB_URI || '';

if (!uri) {
  throw new Error('MONGO_DB_URI is not set');
}

export const client = new MongoClient(uri);

export const database = async () => {
  await client.connect();
  const db = client.db('dashboard');

  return db;
};
