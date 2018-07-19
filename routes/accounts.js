const router = require('express').Router();
const controller = require('../controllers/accounts');

router.get('/login', controller.login_get);  
router.post('/login', controller.login_post);  

router.get('/register', controller.register_get);
router.post('/register', controller.register_post);


module.exports = router;