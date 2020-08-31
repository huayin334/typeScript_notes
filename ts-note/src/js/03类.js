/**
 * es5里面的类
 * 通过构造函数实现
 *
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function Person(name, age, str) {
    this.name = name;
    this.age = age;
    //  实例方法 必须要new了之后调用
    this.run = function () {
        console.log(name + "\u5728" + str);
    };
}
var p = new Person('san', 29, '运动');
console.log(p.name);
p.run();
//类里面的静态方法
//不是放在prototype（原型对象）上, 所以是静态方法，直接使用
Person.getInfo = function () {
    console.log('我是静态方法');
};
Person.getInfo();
// es5中的继承
// Web实现继承Person
function Web() {
    // 对象冒充实现继承
    // 可以继承构造函数里的属性和方法，但是没法继承原型链的属性和方法
    Person.call(this);
}
// Web1实现继承Person 原型链+对象冒充的组合继承模式
function Web1() {
}
// Web1.prototype = new Person()
// 看不下去了
/**
 * ts中的类
 *
 */
var Person1 = /** @class */ (function () {
    //  构造函数：实例化类的时候触发的方法
    function Person1(n) {
        this.name = n;
    }
    Person1.prototype.run1 = function () {
        console.log(this.name);
    };
    // 获取属性的值
    Person1.prototype.getName = function () {
        console.log(this.name);
    };
    // 改变属性的值
    Person1.prototype.setName = function (name) {
        this.name = name;
    };
    return Person1;
}());
var p1 = new Person1('张三');
p1.run1();
p1.setName('lisi');
p1.getName();
// ts中实现继承 extends,super
var Person2 = /** @class */ (function () {
    // 属性
    function Person2(name) {
        this.name = name;
    }
    // 方法
    Person2.prototype.run = function () {
        console.log(this.name + "\u5728\u8FD0\u52A8--\u7236\u7C7B");
    };
    return Person2;
}());
var p2 = new Person2('lijuan');
p2.run();
/**
 * 类从基类中继承了属性和方法，
 * 这里，Pson是一个派生类(子类)，派生自Person2基类(父类)
 * 通过extends关键字
 * 派生类通常被称做子类，基类通常被称作超类
 */
var Pson = /** @class */ (function (_super) {
    __extends(Pson, _super);
    function Pson(name) {
        // 表示调用父类的构造函数
        return _super.call(this, name) || this;
    }
    // 方法
    Pson.prototype.run = function () {
        console.log(this.name + "\u5728\u8FD0\u52A8----\u5B50\u7C7B");
    };
    return Pson;
}(Person2));
var pson = new Pson('lisissss');
pson.run();
/**
 * 类里面的修饰符 typescript里面定义属性的时候给我们提供了三种修饰符
 * public 公有 在类里面，子类，类外面都可以访问
 * protected 保护类型  在类，子类里面可以访问，类外面不能访问
 * private 私有类型  在类里面可以访问，在子类，类外部都不能访问
 *
 * 属性如果不加修饰符 默认就是公有 public
 */
//  ts中类的静态方法和静态属性
var Father = /** @class */ (function () {
    function Father(name) {
        this.age = 20;
        this.name = name;
    }
    // 实例方法
    Father.prototype.run = function () {
    };
    Father.prototype.word = function () {
        console.log();
    };
    // 静态方法、
    Father.print = function () {
        console.log('我是静态方法');
    };
    return Father;
}());
/**
 * 多态：父类定义一个方法不去实现，让继承他的子类去实现，每一个子类有不同的表现
 * 多态属于继承
 */
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log('吃的方法');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        return this.name + '吃肉也吃素';
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.eat = function () {
        return this.name + '吃肉肉';
    };
    return Cat;
}(Animal));
var mydog = new Dog('小狗');
var mycat = new Cat('小猫');
console.log(mydog.eat());
console.log(mycat.eat());
/**
 * ts中的抽象方法和抽象类
 * 抽象类，它提供其他类型继承的基类，不能直接被实例化
 * 用abstract关键字定义抽象类和抽象方法，
 * 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
 *
 * 抽象方法只能放在抽象类里面
 *
 * 抽象类和抽象方法用来定义标准 Animal要求他的子类必须包含eat方法
 */
var Animal1 = /** @class */ (function () {
    function Animal1() {
    }
    return Animal1;
}());
