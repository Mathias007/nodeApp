const express = require("express");
const port = 3000;
const app = express();

app.set("view engine", 'hbs')

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/about', function (req, res){
    res.send("My site");
});

app.listen(port, (err) => {
 if (err) {
    return console.log("coś poszło nie tak...:", err);
 }

 console.log("serwer działa na porcie", port);
});
