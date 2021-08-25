const EventEmitter = require('events');

// 1.创建发射器
const emitter = new EventEmitter();

// 2.监听
// addListener 是on的alias的简写
// 可以多次监听

emitter.on('click', (args) => {
    console.log('监听一');
    console.log(args);
})


emitter.on('click', (args) => {
    console.log('监听二');
    console.log(args);
})


// 3.触发事件
emitter.emit('click', 'yang', 'yuan')
