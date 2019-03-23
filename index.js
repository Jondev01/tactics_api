let express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

//connect to mongoose
mongoose.connect('mongodb://localhost/tactics_api');
let db = mongoose.connection;
app.get('/', (req, res) => {
    res.send('Please use /api/tactics!');
});
app.listen(3000, () => {
    console.log('Listening on port 3000...');
});