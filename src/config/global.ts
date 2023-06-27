const config = {
  env: process.env.NODE_ENV || 'dev',
  app: {
    port: Number(process.env.PORT || 3000),
    logLevel: process.env.LOG_LEVEL || 'debug',
  },
  db: {
    // type: process.env.DB_TYPE || 'sqlite',
    // host: process.env.DB_HOST,
    // port: Number(process.env.DB_PORT),
    // username: process.env.DB_USERNAME,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_DATABASE,
    // logging: process.env.DB_LOGGING === 'true',
    // synchronize: process.env.DB_SYNCHRONIZE === 'true',
    // migrationsRun: process.env.DB_MIGRATIONS_RUN === 'true',
  },
};

export default config;
