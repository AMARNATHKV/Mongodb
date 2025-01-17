const express = require('express');
const session = require('express-session')

const app = express();

const pageroute = require('./src/routes/pageroutes')

const loginroute = require('./src/routes/loginroutes')

const apiroute = require('./src/routes/apiroutes')

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } 
}));


app.use('/', pageroute, loginroute, apiroute);

const PORT=3000;
app.listen(PORT, () => {
    console.log(`The server is starting at ${PORT}`);
})