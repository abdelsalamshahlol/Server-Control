const express = require('express');
const system = require('system-commands');

const app = new express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send(`Sever control | Your server is running ${process.platform}`);
});

app.post('/', (req, res) => {
    const {command} = req.body;
    system(command)
        .then(output => {
            res.send(output);
        })
        .catch(error => {
            res.status(501).send(error);
        });
});

app.listen('3000', () => {
    console.log('App running');
});