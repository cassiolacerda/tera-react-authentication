const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("sample.db", (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connected to the in-memory SQlite database.");
});

module.exports = {
  getUserByEmailAndPassword: async (email, password) => {
    return new Promise(function (resolve, reject) {
      const query = `SELECT id FROM users WHERE email="${email}" AND password="${password}"`;

      db.all(query, [], (err, rows) => {
        if (err) return reject(err);
        return resolve(rows);
      });
    });
  },
  getAllUsers: async () => {
    return new Promise(function (resolve, reject) {
      const query = "SELECT id, name, email FROM users";

      db.all(query, [], (err, rows) => {
        if (err) return reject(err);
        return resolve(rows);
      });
    });
  },
};
