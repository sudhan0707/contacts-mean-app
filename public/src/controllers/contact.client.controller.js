/* Copyright (C) - All Rights Reserved
 * Written by sgnaneshwar, 3/13/2016
 */
'use strict';

angular
    .module('ContactsApp')
    .controller('ListController', function($scope, Contact){
        console.log('Within List Controller');
        $scope.fields = ['firstName', 'lastName'];
        $scope.contacts = Contact.query();

    });
