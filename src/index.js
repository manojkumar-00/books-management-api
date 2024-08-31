
const express = require('express');
const rateLimit = require('express-rate-limit');
const bodyParser = require('body-parser');

const { ServerConfig } = require('./config');
const { PingCheck } = require('./controllers');
const { ErrorHandler } = require("./utils/");
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
    limit: 100000, // Limit each IP to 100 requests per `window` (here, per 15 minutes).  
})

app.use(limiter);

/**
 * Main Api Calls
 */

app.get('/ping', PingCheck('Server is live...'));

app.use('/api', apiRouter);

//last middleware for handling errors
app.use(ErrorHandler);


app.listen(ServerConfig.PORT, () => {
    console.log(`Server started at PORT:${ServerConfig.PORT}`);
})