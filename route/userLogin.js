const db = require("../utils/databaseConfig");
const userLogin = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  if (username && password) {
    db.query("SELECT * FROM accounts WHERE username = ? AND password = ?", [username, password], (error, results) => {
      if (error) throw error;
      if (results.length > 0) {
        req.session.loggedin = true;
        if (username === "admin" && password === "admin") {
          res.redirect("/admin/dashboard");
        } else {
          res.redirect("/home/dashboard");
        }
      } else {
        res.send("Incorrect Username and or Password!");
      }
      res.end();
    });
  } else {
    res.send("Please enter Username and Password!");
    res.end();
  }
};

module.exports = userLogin;
