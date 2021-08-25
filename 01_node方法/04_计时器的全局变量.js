setTimeout(() => {
    console.log('setTimeout');
}, 1000)

setInterval(() => {
    console.log('setInterval');  
}, 1000);

setImmediate(() => {
    console.log('setImmediate')
}, 1000)

process.nextTick(() => {
    console.log('process.nextTick')
})