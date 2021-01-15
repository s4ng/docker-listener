const express = require('express');
const shell = require('shelljs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 80;

app.use(bodyParser.json());

const runningShell = () => {
    shell.exec('./shell/deploy.sh');
}

app.get("/", (req, res) => {
    res.send("hello");
    res.status(200);
})

app.post("/hook", (req, res) => {
    console.log(req.body);
    res.status(200);
    runningShell();
})

app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT}`));