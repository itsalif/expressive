var _ = require('lodash');
var dbConfig = {
    mongodb: {
        host    : '127.0.0.1',
        username: 'nmrony',
        password: 'rootuser',
        port    : 27017,
        sync    : true,
        dbname  : 'project_expressive'
    },
    mysql: {
        host    : '127.0.0.1',
        username: 'root', // change with your db username
        password: '',  //change with your db password
        port    : '3306', //got default if not provided
        sync    : true, // if you want that orm should take care of creating tables as defined in DbSchema, Must be boolean
        dbname  : 'project_expressive'
    }// mysql end;
};

module.exports = function ( dbsystem ) {

    if( _.isArray(dbsystem) || _.isPlainObject(dbsystem)){
        var dbSystems = {};
        _.each(dbsystem ,function(dbms){
           dbSystems[ dbms ] = dbConfig[ dbms ];
        });
        return dbSystems;
    }else{
        return {
            mysql : dbConfig.mysql
        };
    }
    //return dbConfig[ dbsystem || process.argv[2] || ['mysql'] ];
};
