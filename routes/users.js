module.exports = app =>{
  const Users = app.db.models.Users;

  app.get("/users/:id", (req, res) => {
    Users.findById(req.params.id, {
      attributes : ["id", "name", "email"]
    })
    .then(result => res.json(result))
    .catch(error => {
      res.status(412).json({msg: error.message});
    })
  });
}
