module.exports = {
  database: "ntask_test",
  username: "root",
  password: "root",
  params : {
    dialect : "mysql",
    logging : false,
    define : {
      underscored:true
    }
  },
  jwtSecret : "NTASK_TEST",
  jwtSession : {session : false}
};
