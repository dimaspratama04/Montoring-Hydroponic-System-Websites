const db = require("../../utils/databaseConfig");

const userRegister = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;

  const queryUserRegister = "INSERT INTO accounts (username, password, email) VALUES (?, ?, ?)";
  if (username && password && email) {
    db.query(queryUserRegister, [username, password, email], (err, results) => {
      if (err) {
        throw err;
      } else {
        res.redirect("/");
      }
    });
  } else {
    res.redirect("/");
    res.end();
  }
};

module.exports = userRegister;