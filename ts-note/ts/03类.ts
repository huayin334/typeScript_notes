/**
 * es5里面的类
 * 通过构造函数实现
 * 
 */

function Person(name, age, str) {
  this.name = name
  this.age = age
  //  实例方法 必须要new了之后调用
  this.run = () => {
    console.log(`${name}在${str}`);
  }
}
let p = new Person('san', 29, '运动')
console.log(p.name);
p.run()

//类里面的静态方法
//不是放在prototype（原型对象）上, 所以是静态方法，直接使用
Person.getInfo = function () {
  console.log('我是静态方法');
}
Person.getInfo()

// es5中的继承
// Web实现继承Person
function Web() {
  // 对象冒充实现继承
  // 可以继承构造函数里的属性和方法，但是没法继承原型链的属性和方法
  Person.call(this)
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

class Person1 {
  name: string; //省略了public关键词
  //  构造函数：实例化类的时候触发的方法
  constructor(n: string) {
    this.name = n
  }
  run1(): void {
    console.log(this.name);
  }
  // 获取属性的值
  getName(): void {
    console.log(this.name);
  }
  // 改变属性的值
  setName(name: string): void {
    this.name = name
  }
}
let p1 = new Person1('张三')
p1.run1()
p1.setName('lisi')
p1.getName()

// ts中实现继承 extends,super
class Person2 {
  name: string;
  // 属性
  constructor(name: string) {
    this.name = name
  }
  // 方法
  run(): void {
    console.log(`${this.name}在运动--父类`);
  }
}
let p2 = new Person2('lijuan')
p2.run()


/**
 * 类从基类中继承了属性和方法，
 * 这里，Pson是一个派生类(子类)，派生自Person2基类(父类)
 * 通过extends关键字
 * 派生类通常被称做子类，基类通常被称作超类
 */
class Pson extends Person2 {
  constructor(name: string) {
    // 表示调用父类的构造函数
    super(name)
  }
  // 方法
  run(): void {
    console.log(`${this.name}在运动----子类`);
  }
}
let pson = new Pson('lisissss')
pson.run()

/**
 * 类里面的修饰符 typescript里面定义属性的时候给我们提供了三种修饰符
 * public 公有 在类里面，子类，类外面都可以访问
 * protected 保护类型  在类，子类里面可以访问，类外面不能访问
 * private 私有类型  在类里面可以访问，在子类，类外部都不能访问
 * 
 * 属性如果不加修饰符 默认就是公有 public
 */


//  ts中类的静态方法和静态属性
class Father {
  public name: string;
  public age: number = 20
  // 静态属性
  static jintai: string;
  constructor(name) {
    this.name = name;
  }
  // 实例方法
  run() {

  }
  word() {
    console.log();

  }
  // 静态方法、
  static print() {
    console.log('我是静态方法');
  }
}

/**
 * 多态：父类定义一个方法不去实现，让继承他的子类去实现，每一个子类有不同的表现
 * 多态属于继承
 */
class Animal {
  name: string
  constructor(name: string) {
    this.name = name;
  }

  eat() {
    console.log('吃的方法');

  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name)
  }
  eat() {
    return this.name + '吃肉也吃素'
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name)
  }
  eat() {
    return this.name + '吃肉肉'
  }
}

let mydog = new Dog('小狗')
let mycat = new Cat('小猫')
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
abstract class Animal1 {
  abstract eat(): any;
}

