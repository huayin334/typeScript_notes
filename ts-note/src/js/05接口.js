/**
 * 定义行为和动作的规范
 * 限制和规范的作用
 */
//  1.属性类接口
//  2.函数类型接口
//  3.可索引接口
//  4.类类型接口
//  5.接口扩展
// 1.属性类接口 
function printLabel(label) {
    console.log('printLabel');
}
printLabel('hhha');
// ts中自定义方法传入参数对json进行约束  (这里的其实是对象)
function printLabel1(labelInfo) {
    console.log('printLabel');
}
printLabel1({ label: 'lalla' });
function printName(name) {
    // 必须传入对象：firstName secondName
    console.log(name.firstName, name.secondName);
}
printName({ firstName: 'aa', secondName: 'bbb' });
function printInfo(info) {
    console.log();
}
function getName(name) {
    console.log(name);
}
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            if (config.dataType == 'json') {
                JSON.parse(xhr.responseText);
            }
            else {
                console.log(xhr.responseText);
            }
            console.log('成功');
        }
    };
}
var md5 = function (key, value) {
    // 模拟操作
    return key + value;
};
console.log(md5('name', 'lisi'));
var sha1 = function (key, value) {
    // 模拟操作,另一种实现
    return key + '-----' + value;
};
console.log(sha1('name', 'lisi'));
// 3.可索引约束，数组，对象的约束，不常用
// 以前的方式：
var arr = [1, 2, 4, 5];
var arr11 = ['1'];
var arr22 = ['d', 'asx'];
var arr33 = {
    'name': 'ss'
};
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.eat = function () {
        console.log(this.name + '吃粮食');
    };
    return Dog;
}());
var d = new Dog('小黑');
d.eat();
