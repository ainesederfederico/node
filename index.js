const MyEvent = require('./myEvent');
const config = require('config');
const logger = require('./log/logger');


let myEvent = new MyEvent();
myEvent.on('loaded', () => {
    console.log('The object was loaded!');
});
myEvent.initialize();

logger.info(config.get('Security.crypt.seed'));
