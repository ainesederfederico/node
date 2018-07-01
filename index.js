const MyEvent = require('./myEvent');
const config = require('config');


let myEvent = new MyEvent();
myEvent.on('loaded', () => {
    console.log('The object was loaded!');
});
myEvent.initialize();

console.log(config.get('Security.crypt.seed'));