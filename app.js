const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 6379;

app.use(bodyParser.json());

const runningShell = () => {

}

app.get("/", (req, res) => {
    res.send("hello");
    req.status(200).end()
})

app.post("/hook", (req, res) => {
    console.log(req.body)
    res.status(200).end()
})

app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT}`));