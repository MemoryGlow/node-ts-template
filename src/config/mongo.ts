import mongoose from 'mongoose';
import logger from './logger';
import config from './global';

export async function connectMongoDB() {
  const { host, database, port, username, password } = config.db;
  const dbUri = `mongodb://${host}:${port}/${database}`;

  try {
    const con = await mongoose.connect(dbUri, {
      serverSelectionTimeoutMS: 2000,
      user: username ?? undefined,
      pass: password ?? undefined,
      autoCreate: false,
    });

    // check if database exist - to avoid create a new one
    const { databases } = await con.connection
      .getClient()
      .db()
      .admin()
      .listDatabases();

    const existDatabase = databases.some((db) => db.name === database);
    if (!existDatabase) throw new Error('Database not found');

    logger.info(`MongoDB - Connect successfully - [${database}]`);
  } catch (error: unknown) {
    let message;
    logger.error('MongoDB - Connect failure');

    if (error instanceof Error) message = error.message;
    throw new Error(message);
  }
}
