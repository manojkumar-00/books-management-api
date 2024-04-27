
const express = require('express');
const { ServerConfig } = require('./config');
const { PingCheck } = require('./controllers');


const app = express();

app.get(
    '/ping',
    PingCheck('API is live...')
);



app.listen(ServerConfig.PORT, () => {
    console.log(`Server started at port ${ServerConfig.PORT}`);
})