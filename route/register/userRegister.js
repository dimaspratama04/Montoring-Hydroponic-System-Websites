const db = require("../../utils/databaseConfig");

const userRegister = (req, res) => {
  let { username, password, email } = req.body;

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
