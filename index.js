let express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mysql = require('mysql');

//connect to db
let db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'ThisIsThePassword',
    database : 'chess_tactics'
  });
app.get('/', (req, res) => {
    res.send('Please use /api/tactics!');
});
app.listen(3000, () => {
    console.log('Listening on port 3000...');
});