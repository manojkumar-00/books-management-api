
const express = require('express');
const bodyParser = require('body-parser');
const { ServerConfig } = require('./config');
const { PingCheck } = require('./controllers');
const apiRouter = require('./routes');

const app = express();

/**
 * adding body parser middlewares
 */


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.raw());


app.get(
    '/ping',
    PingCheck('API is live...')
);

/**
 * any request starting with /api will route to -> api router
 */

app.use(
    '/api',
    apiRouter
);


app.listen(ServerConfig.PORT, () => {
    console.log(`Server started at port ${ServerConfig.PORT}`);

})