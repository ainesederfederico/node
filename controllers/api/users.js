const Joi = require('joi');



var users = [{
        id: 1,
        name: "fede",
        email: 'fede@nomail.com'
    },
    {
        id: 2,
        name: "coco",
        email: 'coco@nomail.com'
    },
    {
        id: 3,
        name: "ale",
        email: 'ale@nomail.com'
    }
];


const userSchema = {
    id: Joi.number(),
    name: Joi.string().min(3).max(10).required(),
    email: Joi.string().email()
};


exports.index= function (req, res, next) {
    res.send(users);
};

exports.get = function (req, res, next) {

    const user = users.find((x) => {
        return x.id == req.params.id;
    });

    const {
        error,
        value
    } = Joi.validate(user, userSchema);

    if (!user) return res.status(404).send("User not found");

    res.send(user);


};



exports.add = function (req, res, next) {


    const {
        error
    } = Joi.validate(req.body, userSchema);

    if (error) return res.status(400).send(error.details[0].message);


    const user = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };

    users.push(user);

    res.send(user);

};