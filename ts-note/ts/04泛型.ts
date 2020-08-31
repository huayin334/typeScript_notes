// 一个函数：传入的参数和返回的参数是一样的

// 都是number
function fn(arg: number): number {
  return arg
}

// 不能保证返回类型与传入类型相同
function fn1(arg: any): any {
  return arg
}

// 1.泛型函数
//使用泛型可以做到
/**
 * 这里给fn22添加了类型变量T，
 * T帮助我们捕获用户传入的类型，之后就可以再次使用它当做返回值类型
 * 可以适应多种类型
 */
function fn22<T>(arg: T): T {
  return arg
}

// 有2种方式使用
// 1.传入所有的参数，包括参数类型
// 这里我们把T的类型规定了是string
let output = fn22<string>('字符串类型')

// 2.不规定T的类型，使用类型推论----编译器会根据传入的参数自动地帮助我们确定T的类型
// 这种方式更多使用
let output1 = fn22(123)

// 2.泛型类
class MinClass {
  public list: number[] = []
  add(num: number) {
    this.list.push(num)
  }
  min() {
    let minNum = this.list[0];
    for (let i = 0; i < this.list.length; i++) {
      if (minNum > this.list[i]) {
        minNum = this.list[i];
      }
    }
    return minNum
  }
}
// let m = new MinClass();
// m.add(1)
// m.add(23)
// m.add(12)
// console.log(m.min());
// 类的泛型，传入和返回是一样的
class MinClass1<T>{
  public list: T[] = []
  add(value: T): void {
    this.list.push(value)
  }
  min(): T {
    let minNum = this.list[0];
    for (let i = 0; i < this.list.length; i++) {
      if (minNum > this.list[i]) {
        minNum = this.list[i];
      }
    }
    return minNum
  }
}

let m1 = new MinClass1<String>();

// 3.泛型接口

// 原来的实现方式，函数类型接口
interface Configin {
  (value: string, value2: string): string;
}
let setData: Configin = function (value: string, value2: string): string {
  return value
}

// 第一种定义泛型的方法
interface Configin1 {
  <T>(value: T): T;
}
let getData: Configin1 = function <T>(value: T): T {
  return value;
}
getData<string>('张三');

// 第二种定义泛型的方法
interface ConfigFn<T> {
  (value: T): T;
}
function getData1<T>(value: T): T {
  return value;
}

let myGetData: ConfigFn<string> = getData1;
myGetData('dscds');

/**
 * 定义一个User类--映射数据库字段
 * 定义一个mysqlObj--操作数据库
 * 然后把User类作为参数传到MysqlObj中
 */

class user {
  username: string | undefined;
  password: string | undefined;
}

class MysqlObj<T> {
  // 传入的数据的类型要和user一样
  add(info: T): boolean {
    console.log(user);
    return true
  }
}

let u = new user();
u.username = 'zhangsan'
u.password = '123456'

// 在这里指定 T 的类型， 这样就可以对数据进行数据校验
let db = new MysqlObj<user>()
db.add(u)

class Art {
  title: string | undefined;
  desc: string | undefined;
  status: number | undefined;
  constructor(params: {
    title: string | undefined,
    desc: string | undefined,
    status?: number | undefined,
  }) {
    this.title = params.title;
    this.desc = params.desc;
    this.status = params.status;
  }
}

let art = new Art({
  title: 'q',
  desc: 'd'
})

// 把类当做参数的泛型类
let Db = new MysqlObj<Art>();
Db.add(art)