import logger from "./logger.js";

module.exports = {
  database: "ntask",
  username: "root",
  password: "root",
  params: {
    dialect : "mysql",
    logging : (sql) => {
      logger.info(`[${new Date()}] ${sql}`);
    },
    define: {
      underscored:true
    }
  },
  jwtSecret : "NT@$K - AP1",
  jwtSession : {session : false}
};
