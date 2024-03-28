const pool = require('../config/database.ts');

exports.queryDatabase = function(query, params, callback) {
  pool.execute(query, params, (error, results, fields) => {
    callback(error, results);
  });
};
