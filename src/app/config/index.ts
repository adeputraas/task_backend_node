export default {
  app: {
    HOST: process.env.APP_HOST || "0.0.0.0",
    PORT: process.env.APP_PORT || 4444,
  },
  urlMovies: "http://www.omdbapi.com/",
  credentialsKey: "faf7e5bb",
  logger: {
    LOG_LEVEL: process.env.NODE_ENV === "prod" ? "info" : "trace",
  },
  postgresConnection: {
    client: "pg",
    host: process.env.DB_HOST || "127.0.0.1",
    port: Number(process.env.DB_PORT || '5432'),
    password: "mysecretpassword",
    database: "learning-typescript",
    user: "postgres",
    poolMin: 0,
    poolMax: 10,
    poolIdle: 10000
  },
};
