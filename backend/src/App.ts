require('dotenv').config({path: "../../.env"});

console.log(process.env)

const express = require('express');
const cors = require('cors');
const todoRoutes = require('./routes/todoRoutes.ts');

const app = express();
const port = process.env.PORT;

app.use(cors()); // Customize as needed.
app.use(express.json()); // Middleware to parse JSON bodies

// Use the todo routes
app.use(todoRoutes);

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
