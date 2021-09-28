export default {
  app: {
    HOST: process.env.APP_HOST || "0.0.0.0",
    PORT: process.env.APP_PORT || 4444,
  },
  urlMovies: "http://www.omdbapi.com/",
  credentialsKey: "faf7e5bb",
  logger: {
    LOG_LEVEL: process.env.LOG_LEVEL || "info",
  },
};
