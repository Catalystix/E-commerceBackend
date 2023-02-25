const express = require('express');
const routes = require('./routes');
require('dotenv').config()
console.log(process.env)
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
// 13-15 class reference
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
}).catch(err => {
  console.log('there has been an error');
});

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
})
