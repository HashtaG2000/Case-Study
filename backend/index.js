var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var cors = require('cors')
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
const port = 4000
// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'RatneshV@25',
    database: 'playground'
});
// connect to database
dbConn.connect();
console.log("connected")


app.get('/users', function (req, res) {
    dbConn.query('SELECT * FROM users', function (error, results, fields) {
        if (error) throw error;
        return res.send(results);
    });
})

app.delete('/deleteusers/:id', (req, res) => {
    let sql = "DELETE FROM users WHERE id=" + req.params.id + "";
    let query = dbConn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

app.put('/edit/:id', (req, res) => {
    const { id } = req.params
    // console.log()
    const { Name , Email , Phone , Website} = req.body;
    console.log(req.body)
    
     dbConn.query(`UPDATE users SET Name="${Name}", Email="${Email}",Phone="${Phone}",Website="${Website}"  WHERE id="${id}"`, function(err, results) {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});
