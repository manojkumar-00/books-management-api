
const express = require('express');
const bodyParser = require('body-parser');
const { ServerConfig, Logger } = require('./config');
const { PingCheck } = require('./controllers');
const { sequelize } = require('./models');
const { IdentityReset, ErrorHandler } = require("./utils/");

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

//last middleware for handling errors
app.use(ErrorHandler);


app.listen(ServerConfig.PORT, () => {
    console.log(`Server started at port ${ServerConfig.PORT}`);

    /**
     * Resetting Identity column, NOTE: please run only in case of MSSQL 
     */
    sequelize.authenticate()
        .then(() => {
            return IdentityReset();
        })
        .then(() => {
            console.log("Succes: Identity seed reset successfull");
        })
        .catch(error => {
            console.log('Identity seed reset -- failed -- for all models');
            console.error('Database is not connected:', error);
            Logger.error({ message: "Database is not Connected!!!", error: error });
        });

})