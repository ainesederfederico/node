const Joi = require('joi');

const VIEWS_DIR = './accounts/';

const accountSchema = {
    nausernameme: Joi.string().min(3).max(10).required(),
    password: Joi.string().min(5).max(20).required()
};


exports.login_get = function (req, res, next) {
    res.render(VIEWS_DIR + 'login', { title: 'Login' });
};

exports.login_post = function (req, res, next) {
    res.render(VIEWS_DIR + '', { title: 'Login' });
};

exports.register_get = function (req, res, next) {
    res.render(VIEWS_DIR + 'register', { title: 'Register' });
};

exports.register_post = function (req, res, next) {
    res.render(VIEWS_DIR + 'register', { title: 'Register' });
};