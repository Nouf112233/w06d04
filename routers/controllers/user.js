const userModel = require("./../../db/models/userSchema");

const addNewUser = (req, res) => {
  const { username, email, password, phonNumber } = req.body;
  const newUser = new userModel({
    username,
    email,
    password,
    phonNumber,
  });
  newUser
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { addNewUser };
