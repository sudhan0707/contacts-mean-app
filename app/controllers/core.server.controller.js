/* Copyright (C) - All Rights Reserved
 * Written by sgnaneshwar, 3/13/2016
 */
'use strict';

module.exports.index = function(req, res){
    console.log('Within the index Controller');
    res.render('index');
};