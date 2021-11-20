const express = require("express");
const app = express();
const cors = require("cors");
const {Sequelize} = require("sequelize");
const port = 3001;
const sequelize = new Sequelize("handleturni", "gambra", "gambra", {
    host: "localhost",
    dialect: "mysql",
});
app.use(cors());

//TODO cron every week start, and insert a new week of days
app.get("/insertWeek", async (req, res) => {
    const result = await sequelize.query("INSERT INTO currentweek");
});

//TODO work on rest api!
app.get("/getTurns", async (req, res) => {
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
