console.log('index.js')

// 三种导入方式

// 方法一：
// import {fName, fAge, fSayHello} from './foo.js';
// fSayHello('yuan');
// console.log(fName, fAge);

// 方法二：
// import {fName as wName, fAge as wAge, fSayHello as wSayHello} from './foo.js';
// wSayHello(wName);
// console.log(wName, wAge);

// 方法三：
import * as foo from './foo.js';
foo.fSayHello(foo.fName);
console.log(foo.fName, foo.fAge);
