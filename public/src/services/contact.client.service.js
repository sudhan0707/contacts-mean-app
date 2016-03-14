/* Copyright (C) - All Rights Reserved
 * Written by sgnaneshwar, 3/13/2016
 */
'use strict';

angular
    .module('ContactsApp')
    .factory('Contact', function($resource){
        return $resource('/api/contact/:id', {id: '@id'},{
            'update' : {method: 'PUT'}
        });
    });