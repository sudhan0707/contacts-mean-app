/* Copyright (C) - All Rights Reserved
 * Written by sgnaneshwar, 3/13/2016
 */
'use strict';

/**
 * Module Dependencies
 * */
var mongoose = require('mongoose'),
    chalk = require('chalk'),
    config = require('./config/config');


//Bootstrap mongoose
var db = mongoose.connect(config.db, function(err){
    if(err){
        console.error(chalk.red("Could not connect to MongoDB!"));
        console.error(chalk.red(err));
    }
});

//Init the express application
var app = require('./config/express')(db);

app.listen(config.port, function(err){
    if(err){
        console.error(chalk.red("Could not start server on port" +config.port));
        console.error(chalk.red(err));
    }
    console.log(chalk.green('Listening on the port '+config.port));
    console.log(chalk.green('Log on to http://localhost:'+config.port));
})


