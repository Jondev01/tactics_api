const express = require('express'),
  bodyParser = require('body-parser'),
  mysql = require('mysql'); 
const app = express();

//connect to db
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'ThisIsThePassword',
  database : 'chess_tactics'
});
  db.connect();
app.get('/', (req, res) => {
  res.send('Please use /api/tactic!');
});
app.get('/api/tactics', (req, res) => {
  db.query('SELECT * FROM positions', function (err, rows, fields) {
    if (err) throw err
    console.log('The solution is: ', rows[0].FEN);
  });
  res.send('Please use /api/tactics!');
});
app.listen(3000, () => {
  console.log('Listening on port 3000...');
});