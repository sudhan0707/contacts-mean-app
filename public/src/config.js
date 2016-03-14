/* Copyright (C) - All Rights Reserved
 * Written by sgnaneshwar, 3/13/2016
 */
'use strict';

angular
    .module('ContactsApp')
    .config(function($routeProvider){

        $routeProvider
            .when('/contacts', {
                controller: 'ListController',
                templateUrl: 'src/views/list.client.tpl.html'
            })
            .otherwise({
                redirectTo: '/contacts'
            });
    });