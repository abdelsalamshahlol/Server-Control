const express = require('express');
const system = require('system-commands');
require('dotenv').config();
const app = new express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send(`Server control | Your server is running ${process.platform}`);
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

app.get('/commands', (req, res) => {
    if (process.platform === 'linux') {
        const commands = require('./data/commands/linux');
        res.json(commands);
    } else if (process.platform === 'win32') {
        const commands = require('./data/commands/windows');
        res.json(commands);
    } else {
        res.send('Sorry, we don\'t have commands for you.')
    }
});

app.listen(process.env.PORT || '4500');