// es5定义函数的方法
// 函数声明
function fn1() {
}
// 匿名函数
var fn2 = function () {
};
// ts定义函数的方法
/**
 * 如果没有返回值，就写void
 * 有返回值，返回什么类型就写什么
 */
// 函数声明法
function fn3() {
    return '这里返回的类型要是字符串类型';
}
// 匿名函数法
var fn4 = function () {
    return 134;
};
// ts中方法传参
// 函数声明
function getInfo(name, age) {
    return name + "--" + age;
}
console.log(getInfo('啦啦啦啦', 29));
// 匿名函数
var getInfo1 = function (name, age) {
    return name + "--" + age;
};
console.log(getInfo1('lj啦啦', 29));
// 没有返回值
function fn6() {
    console.log('我是没有返回值的方法');
}
fn6();
// 方法可选参数 (问号表示可传可不传)
// 可选参数必须配置到参数的最后面
function fn7(name, age) {
    console.log(name, age);
}
fn7('s', 20);
fn7('s');
// 默认参数
function fn8(name, number) {
    if (number === void 0) { number = 20; }
    console.log(name, number);
}
fn8('张三');
fn8('张三', 23);
// 剩余参数
function fn9(a, b, c) {
    console.log(a + b + c);
}
fn9(1, 4, 5);
// 三点运算符接收传过来的值
function fn10() {
    var arr10 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr10[_i] = arguments[_i];
    }
    console.log(arr10.reduce(function (acc, cur) { return (acc + cur); }));
}
fn10(1, 2, 5, 78, 4, 1);
function fn11(a) {
    var arr11 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arr11[_i - 1] = arguments[_i];
    }
    arr11.push(a);
    console.log(a);
    console.log(arr11.reduce(function (acc, cur) { return (acc + cur); }));
}
// 会把1赋值给a
fn11(1, 2, 5, 78, 4, 1);
function f12(str) {
    if (typeof str === 'string') {
        return "\u4F20\u5165\u7684\u662F\u5B57\u7B26\u4E32" + str;
    }
    else {
        return "\u5E74\u9F84" + str;
    }
}
console.log(f12('账单'));
console.log(f12(20));
