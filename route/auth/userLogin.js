const db = require("../../utils/databaseConfig");

const userLogin = (req, res) => {
  let { username, password } = req.body;

  const queryAuth = `SELECT * FROM accounts WHERE username = '${username}' AND password = '${password}'`;
  if (username && password) {
    db.query(queryAuth, (error, results) => {
      if (error) throw error;
      if (results.length > 0) {
        req.session.loggedin = true;
        if (username === "admin" && password === "admin") {
          res.status(200).json({ statusText: "OK", message: "Admin" });
        } else {
          res.status(200).json({ statusText: "OK", message: "User" });
        }
      } else {
        res.status(400).json({ statusText: "ERR", message: "Incorect Username or Password !" });
      }
      res.end();
    });
  } else {
    res.status(400).json({ statusText: "ERR", message: "Please enter Username and Password!" });
    res.end();
  }
};

module.exports = userLogin;
