
const express = require('express');
const rateLimit = require('express-rate-limit');
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


// Rate Limiter
const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).  
})

app.use(limiter);

/**
 * Main Api Calls
 */

app.get('/ping', PingCheck('API is live...'));

app.use('/api', apiRouter);

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