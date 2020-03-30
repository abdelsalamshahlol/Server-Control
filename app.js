const express = require('express');
const system = require('system-commands');

const app = new express();

app.post('/', (req, res) => {
    const {command} = req.body;

    system(command)
        .then(output => {
            // Log the output
            console.log(output)
        })
        .catch(error => {
            // An error occurred! Log the error
            console.error(error)
        });
});

app.listen('3000', () => {
    console.log('App running');
});