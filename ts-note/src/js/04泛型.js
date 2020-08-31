// 一个函数：传入的参数和返回的参数是一样的
// 都是number
function fn(arg) {
    return arg;
}
// 不能保证返回类型与传入类型相同
function fn1(arg) {
    return arg;
}
// 1.泛型函数
//使用泛型可以做到
/**
 * 这里给fn22添加了类型变量T，
 * T帮助我们捕获用户传入的类型，之后就可以再次使用它当做返回值类型
 * 可以适应多种类型
 */
function fn22(arg) {
    return arg;
}
// 有2种方式使用
// 1.传入所有的参数，包括参数类型
// 这里我们把T的类型规定了是string
var output = fn22('字符串类型');
// 2.不规定T的类型，使用类型推论----编译器会根据传入的参数自动地帮助我们确定T的类型
// 这种方式更多使用
var output1 = fn22(123);
// 2.泛型类
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (num) {
        this.list.push(num);
    };
    MinClass.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return MinClass;
}());
// let m = new MinClass();
// m.add(1)
// m.add(23)
// m.add(12)
// console.log(m.min());
// 类的泛型，传入和返回是一样的
var MinClass1 = /** @class */ (function () {
    function MinClass1() {
        this.list = [];
    }
    MinClass1.prototype.add = function (value) {
        this.list.push(value);
    };
    MinClass1.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return MinClass1;
}());
var m1 = new MinClass1();
var setData = function (value, value2) {
    return value;
};
var getData = function (value) {
    return value;
};
getData('张三');
function getData1(value) {
    return value;
}
var myGetData = getData1;
myGetData('dscds');
/**
 * 定义一个User类--映射数据库字段
 * 定义一个mysqlObj--操作数据库
 * 然后把User类作为参数传到MysqlObj中
 */
var user = /** @class */ (function () {
    function user() {
    }
    return user;
}());
var MysqlObj = /** @class */ (function () {
    function MysqlObj() {
    }
    // 传入的数据的类型要和user一样
    MysqlObj.prototype.add = function (user) {
        console.log(user);
        return true;
    };
    return MysqlObj;
}());
var u = new user();
u.username = 'zhangsan';
u.password = '123456';
var db = new MysqlObj();
db.add(u);
