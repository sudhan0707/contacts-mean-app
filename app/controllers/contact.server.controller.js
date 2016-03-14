/* Copyright (C) - All Rights Reserved
 * Written by sgnaneshwar, 3/13/2016
 */
'use strict';

var mongoose = require('mongoose'),
    Contact = mongoose.model('Contact');

module.exports.getAllContacts = function(req, res){

    Contact.find({}, function(err, contacts) {
        if (err) throw err;

        res.json(contacts);
    });


};