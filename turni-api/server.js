
const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const port = 3001;
const sequelize = new Sequelize('handling-turni', 'gambra', 'gambra21', {
    host: 'localhost',
    dialect:  'mysql',
  });

app.get('/getTurns',  async (req, res) => {
    sequelize.authenticate();
      try {
            
          console.log('Connection has been established successfully.');
            const response = await sequelize.query('SELECT * from currentweek');
            res.setHeader('Content-Type', 'application/json');
            res.send(response);
            return response;
        } catch (error) {
          console.error('Unable to connect to the database:', error);
        }
});

//TODO creare rest api per handle turni
app.post('/setTurn', (req, res) => {
    res.send('turni added!');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
