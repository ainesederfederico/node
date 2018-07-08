const router = require('express').Router();
const controller = require('../../controllers/api/users');

router.get('/', controller.index);
router.get('/:id', controller.get);
router.post('/add',controller.add);

module.exports = router;
