const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;
const dotenv = require("dotenv");

dotenv.config();

const ormConfig = {
  type: "postgres",
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  entities: ["src/entities/*.entity.js"],
  synchronize: true,
  autoLoadEntities: true,
  //logging: true,
};

module.exports = ormConfig;
