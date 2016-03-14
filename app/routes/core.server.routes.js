/* Copyright (C) - All Rights Reserved
 * Written by sgnaneshwar, 3/13/2016
 */
'use strict';

module.exports = function(app){

    var core = require('../../app/controllers/core.server.controller.js');

    app
        .route('/')
        .get(core.index);
};