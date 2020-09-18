const env = process.env.NODE_ENV || "development";

const sharedSecret = "";

const development = {
  env: env,
  app: {
    port: 5555
  },
  auth: {},
  db: {}
};

const production = {
  env: env,
  app: {
    port: 5556
  },
  auth: {},
  db: {}
};

const config = {
  development,
  production
};

module.exports = config[env];
