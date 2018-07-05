How to use it

    const config = require('config');

    config.get('Security.crypt.seed')

Chose Environment

    Change NODE_ENV global variable
    WIN: set NODE_ENV=production
    MAC: export NODE_ENV=production


Enviroment Variables
    MAC: set app_database_password=mypassword
    MAC: export app_database_password=mypassword

    Add variables to custom-enviroment-variables file
    {
        "database":{
            "password":"app_database_password"        
        }
    }

    Read it : config.get('database.password')