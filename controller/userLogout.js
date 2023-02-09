const userLogout = (req, res) => {
  if (req.session.loggedin) {
    delete req.session.loggedin;
    res.json({ result: "SUCCESS" });
  } else {
    res.json({ result: "ERROR", message: "User is not logged in." });
  }
};

module.exports = userLogout;
