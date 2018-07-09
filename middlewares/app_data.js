const config = require('config');

const globalLocals = function (req, res, next) {
    res.locals.app_data ={ 
        name: config.get("data.name"),
        author: config.get("data.author"),
        email: config.get("data.email"),
        description: config.get("data.description"),
    };
    next();
  };

module.exports = globalLocals;