const pool = require('../config/database.ts');

exports.queryDatabase = (sql, callback) => {
  pool.query(sql, (error, results, fields) => {
    callback(error, results);
  });
};
