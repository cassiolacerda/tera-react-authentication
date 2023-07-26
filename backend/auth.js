const jwt = require("jsonwebtoken");

const accessTokenSalt = "very-secret-salt";
const tokenExpiresIn = "5m";

module.exports = {
  generateToken: async (payload) => {
    return new Promise((resolve, reject) => {
      jwt.sign(
        payload,
        accessTokenSalt,
        { expiresIn: tokenExpiresIn },
        (err, token) => {
          if (err) return reject(err);
          resolve(token);
        }
      );
    });
  },
  verifyToken: async (token) => {
    return new Promise((resolve, reject) => {
      jwt.verify(token, accessTokenSalt, (err, decodedData) => {
        if (err) return reject(err);
        return resolve(decodedData);
      });
    });
  },
};
