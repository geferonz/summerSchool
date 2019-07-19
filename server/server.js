const express = require("express");
const path = require("path");
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();
const router = express.Router();

app.use(bodyParser.json())

MongoClient.connect(db.url, (err, database) => {

    if (err) return console.log(err);

    router.get("/", function (req, res) {
        res.sendFile(path.join(__dirname + "/../myApp/index.html"));
    });

    router.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname + "/../myApp/index.html"));
    });

    router.get("/ticket*", function (req, res) {
        res.sendFile(path.join(__dirname + "/../myApp/index.html"));
    });

    router.get("/create", function (req, res) {
        res.sendFile(path.join(__dirname + "/../myApp/index.html"));
    });

    //add the router
    app.use("/", router);
    app.use('/', express.static(__dirname + '/../myApp'));

    require('./app/routes')(app, database);

    app.listen(process.env.port || 8080);

    console.log("Running at Port 8080");
});