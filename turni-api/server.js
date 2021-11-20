const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var jsonParser = bodyParser.json()

const {Sequelize} = require("sequelize");
const port = 3001;
const sequelize = new Sequelize("handleturni", "gambra", "gambra", {
    host: "localhost",
    dialect: "mysql",
});
app.use(cors());
//TODO cron every week start, and insert a new week of days
app.post("/insertDay",jsonParser, async (req, res) => {
    const id = req.body.id;
    const user = req.body.user;
    console.log(req.body.user);
    console.log(`INSERT INTO day VALUES('${id}','${user}',0)`);

    const result = await sequelize.query(`INSERT INTO day VALUES('${id}','${user}',0)`);
});

//TODO work on rest api!
app.get("/getTurns",urlencodedParser, async (req, res) => {
    const result = await sequelize.query("SELECT * FROM day");
    console.log(result);
    console.log("fetch");
    res.json(result);
});

//TODO creare rest api per handle turni
app.post("/setTurn", (req, res) => {
    res.send("turni added!");
});

app.listen(port, () =>
    console.log(`Hello world app listening on port ${port}!`)
);
