const db = require('../utils/db.ts');

exports.welcome = (req, res) => {
  res.send('Welcome to the Todo List API!');
};

exports.listTodos = (req, res) => {
  db.queryDatabase('SELECT * FROM todos', (error, results) => {
    if (error) {
      return res.status(500).send(`Error executing the DB query: ${error}`);
    }
    res.send(results);
  });
};

exports.addNewTodo = (req, res) => {
  const { title, description, completed } = req.body;
  const query = `INSERT INTO todos (title, description, due_date, completed) VALUES (?, ?, ?, ?);`;
  const due_date = new Date(req.body?.due_date).toISOString().slice(0, 19).replace('T', ' ');

  // Make sure to pass a function as the last argument
  db.queryDatabase(query, [title, description, due_date, completed], (error, results) => {
    if (error) {
      console.error('Error executing the DB query', error);
      return res.status(500).send(`Error executing the DB query: ${error}`);
    }
    res.send(results);
  });
};

exports.deleteTodo = (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM todos WHERE id = ?`;

  // Make sure to pass a function as the last argument
  db.queryDatabase(query, [id], (error, results) => {
    if (error) {
      console.error('Error executing the DB query', error);
      return res.status(500).send(`Error executing the DB query: ${error}`);
    }
    res.send(results);
  });
};

exports.updateTodo = (req, res) => {
  const { title, description, completed, id } = req.body;
  const query = `
    UPDATE todos
    SET title = ?, description = ?, completed = ?
    WHERE id = ?
  `;

  console.log({ title, description, completed, id })
  db.queryDatabase(query, [title, description, completed, id], (error, results) => {
    if (error) {
      console.error('Error executing the DB query', error);
      return res.status(500).send(`Error executing the DB query: ${error}`);
    }
    res.send(results);
  });
};