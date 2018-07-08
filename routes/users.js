const router = require('express').Router();
const controller = require('../controllers/users');

router.get('/', controller.index);  
router.get('/view/:id', controller.view);
router.get('/add',controller.add_get);
router.post('/add', controller.add_post);

module.exports = router;