const EventEmitter = require('events');


class MyEvent extends EventEmitter{

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

module.exports = MyEvent;