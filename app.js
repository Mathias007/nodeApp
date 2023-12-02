const express = require("express");
const port = process.env.PORT || 3000;
const app = express();

const path = require('path');
const fromAnotherFile = require("./js/dynamic")

app.use('/assets', express.static(path.join(__dirname, "./assets")));
app.use('/js', express.static(path.join(__dirname, "./js")));

app.set("view engine", 'hbs');

app.get('/', function (req, res) {
    const clickLabel = () => {
        return "Klik";
    };

    res.render('index', {
        pageTitle: "Start Page",
        subTitle: fromAnotherFile.someTitle,
        clickLabel: clickLabel()
    });
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
