const db = require("../../utils/databaseConfig");

const userRegister = (req, res) => {
  const { username, password, email } = req.body;

  const queryCheckUsername = `SELECT username FROM accounts WHERE username = '${username}' `;
  db.query(queryCheckUsername, (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      res.status(409).json({ statusText: "CONFLICT", message: "Username Already Exist !" });
    } else {
      const queryUserRegister = `INSERT INTO accounts (username, password, email) VALUES ('${username}','${password}','${email}')`;
      db.query(queryUserRegister, (err, results) => {
        if (err) throw err;
        res.status(200).json({ statusText: "SUCCES", message: "Account success created !" });
      });
    }
  });
};

module.exports = userRegister;
