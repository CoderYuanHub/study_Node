// 通过alloc创建buffer
const buffer = Buffer.alloc(8);
console.log(buffer);

// 默认是10进制，直接写入，结果会转换，例如10进制 88 的 16进制 是 58
buffer[0] = 88;
// 16进制
buffer[1] = 0x16;

console.log(buffer);

function test () {
    var a = 0;
    return function () {
        console.log(++a);
    }
}

var f1 = test()
f2 = test()
 
f1();
f1();
f2();