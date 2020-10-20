'use strict';
const http = require('http');
const express = require('express');

const os = require('os');

console.log(os.platform());

const technologien = require('./router/technologien');
const unternehmen = require('./router/unternehmen');
const karriere = require('./router/karriere');
const dienstleistungen = require('./router/dienstleistungen');

const port = 3000;

const app = express();

app.use('/', express.static('lib'));


app.get('/', (req, res) => {
    res.send('Hallo Welt');
});
app.use('/technologien', technologien);
app.use('/unternehmen', unternehmen);
app.use('/karriere', karriere);
app.use('/dienstleistungen', dienstleistungen);

const server = http.createServer(app);

server.listen(port, () => {
    console.log(port);
})