const EventEmitter = require('events');


class MyObject extends EventEmitter{

    initialize(){

        this.loaded();
    }

    loaded(){

        this.emit('loaded');
    }
}


let myObject = new MyObject();

myObject.on('loaded',()=>{
    console.log('The object was loaded!');
});

myObject.initialize();

