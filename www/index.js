import chalk     from 'chalk';
import express   from 'express';
//import * as wasm from './wasm/hello_wasm.js';

const PORT = 3000;
const app = express();
app.listen(PORT);

console.log(
  chalk.green('Server running on ' + chalk.bold('http://localhost:' + PORT))
);

app.get('/', (req, res) => {
  res.send('Hello World')
});
