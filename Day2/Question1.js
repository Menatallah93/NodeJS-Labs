var Emitters = require('events')
var utils = require('util')
//function constructor
var MyFunc = new Function();
utils.inherits(MyFunc,Emitters)

// if i want to send data with event
MyFunc.prototype.greet = function(data){
  this.emit('eventFired', data)
}

var customFun = new MyFunc();
customFun.on('eventFired', function(data){
  console.log('Welcome from :' + data)
});
customFun.greet('Menatallah Ayman');