import jwt from "jwt-simple";

module.exports = app => {
  const cfg = app.libs.config;
  const Users = app.db.models.Users;

  app.post("/token", (req, res) => {
    if (req.body.emaill && req.body.password){
      const email = req.body.email;
      const password = req.body.password;

      Users.findOne({where : {email : email}})
      .then(user => {
        if(User.isPassword(user.passport, password)){
          const payload = {id : user.id};
          res.json({
            token: jwt.encode(payload, cfg.jwtSecret)
          });
        } else{
          res.sendStatus(401);
        }
      })
      .catch(error => res.sendStatus(401));
    }else{
      res.sendStatus(401);
    }
  });
};
