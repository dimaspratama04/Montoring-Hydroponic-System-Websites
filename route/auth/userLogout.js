const userLogout = (req, res) => {
  if (req.session.loggedin) {
    delete req.session.loggedin;
    res.status(200).json({ result: "SUCCESS", message: "Logout succesfull !" });
  } else {
    res.status(304).json({ result: "ERROR", message: "User is not logged in." });
  }
};

module.exports = userLogout;
