const express = require('express');
const app = express();

const port = 3001;

app.get('/', (req, res) => {
    res.send('Hello World, from express');
});

//TODO creare rest api per handle turni
app.post('/setTurn', (req, res) => {
    res.send('turni added!');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
