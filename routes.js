let express = require('express');
let router = express.Router();

let controller = require('./controllers/controller');

router.get('/', controller.home);

router.get('/save', controller.save);
router.post('/save', controller.getInfo);




module.exports = router;