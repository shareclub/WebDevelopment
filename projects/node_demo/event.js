//event.js 文件
var events = require('events'); //导入events模块
var emitter = new events.EventEmitter(); //创建EventEmitter对象
emitter.on('someEvent', function(arg1, arg2) { //为emitter对象注册监听器
    console.log('listener1', arg1, arg2);
});
emitter.on('someEvent', function(arg1, arg2) {
    console.log('listener2', arg1, arg2);
});
emitter.emit('someEvent', 'hello', 'world'); //发送事件，按顺序执行监听器