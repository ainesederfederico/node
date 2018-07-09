const debug = require('debug')('erp:controllers');

exports.index = function (req, res, next) {

    debug('Home page was called!');

    res.render('index', {
        title: 'Home'
    });
};