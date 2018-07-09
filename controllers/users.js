const Joi = require('joi');


const VIEWS_DIR = './users/';

//TO REMOVE
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

exports.index = function (req, res, next) {
    res.render(VIEWS_DIR + 'index', {
        title: 'Users',
        users: users
    });
};

exports.view = function (req, res, next) {

    const user = users.find((x) => {
        return x.id == req.params.id;
    });

    if (!user) return res.status(404).send("User not found");

    res.render(VIEWS_DIR + 'view', {
        title: 'View User',
        user: user
    });


};

exports.add_get = function (req, res, next) {
    res.render(VIEWS_DIR + 'add', { title: 'Add User' });
};

exports.add_post = function (req, res, next) {

    const {error} = Joi.validate(req.body,userSchema);
  
    if(error) {
        
        res.render(VIEWS_DIR + 'add', {
            title: 'Users',
            message: {type:'error',text:error.details[0].message},
            data:req.body
        });
        return;
    }
  
    //TO REMOVE
    const user = {
      id: users.length + 1,
      name: req.body.name,
      email: req.body.email
    };
    users.push(user);
  
 
    res.render(VIEWS_DIR + 'index', {
        title: 'Users',
        users: users,
        message: {type:'info',text:'The user have been loaded!'},
    });
    
  };