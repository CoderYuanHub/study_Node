// 三种导出方式

// 方法一：
// export const name = '源';
// export const age = 24;
// export const sayHello = function (name) {
//     console.log('您好' + name);
// }; 

// 方法二：
const name = '源';
const age = 24;
const sayHello = function (name) {
    console.log('你好，' +  name);
};
// export {} 大括号里面不是对象
// export {
//     name,
//     age,
//     sayHello
// }

// 方法三：
export {
    name as fName,
    age as fAge,
    sayHello as fSayHello
}