const config = {
  env: process.env.NODE_ENV ?? 'dev',
  app: {
    port: Number(process.env.PORT ?? 3000),
    logLevel: process.env.LOG_LEVEL ?? 'debug',
  },
  db: {
    database: process.env.DB_DATABASE ?? '',
    host: process.env.DB_HOST ?? '',
    port: Number(process.env.DB_PORT ?? 27017),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
  logger: {
    apiKey: process.env.LOGFLARE_API_KEY ?? '',
    sourceToken: process.env.LOGFLARE_SOURCE_TOKEN ?? '',
  },
};

export default config;
