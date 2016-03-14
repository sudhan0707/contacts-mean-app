/* Copyright (C) - All Rights Reserved
 * Written by sgnaneshwar, 3/13/2016
 */

var Chance = require('chance'),
    mongoose = require('mongoose'),
    schema = mongoose.Schema;

var db = mongoose.connect('mongodb://localhost/contactsDev', function(err){});

var _contact = new schema({
    firstName: {
        type: String,
        default: '',
        trim: true
    },
    lastName: {
        type: String,
        default: '',
        trim: true
    }
});

var userContact = mongoose.model('Contact', _contact);

var chance2 = new Chance();
for(var i = 0; i < 10 ; i++){

// create a new user
    var con = userContact({
        firstName: chance2.first(),
        lastName: chance2.last()
    });

// save the user
    con.save(function(err) {
        if (err) throw err;

        console.log('User created!');
    });
}
