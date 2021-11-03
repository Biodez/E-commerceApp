const jwt = require("jsonwebtoken");

const authenticate = (request, response, next) => {
  jwt.verify(
    request.cookies.admintoken,
    process.env.SECRET_KEY,
    (err, payload) => {
      if (err) {
        response.status(400).json({ verified: false });
      } else {
        console.log("admin is authenticated");
        next();
      }
    }
  );
};

module.exports = {
    authenticate
}
