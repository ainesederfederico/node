const EventEmitter = require('events');


class MyObject extends EventEmitter{

    initialize(){

        this.loaded();
    }

    loaded(){

        this.emit('loaded');
    }

    substract(param_1,param_2){

        return param_1-param_2;
    }
}


let myObject = new MyObject();

myObject.on('loaded',()=>{
    console.log('The object was loaded!');
});

myObject.initialize();

