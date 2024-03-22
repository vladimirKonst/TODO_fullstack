const db = require('../utils/db.ts');

exports.welcome = (req, res) => {
  res.send('Welcome to the Todo List API!');
};

exports.listTodos = (req, res) => {
  db.queryDatabase('SELECT * FROM todos', (error, results) => {
    if (error) {
      return res.status(500).send('Error executing the query');
    }
    res.send(results);
  });
};
