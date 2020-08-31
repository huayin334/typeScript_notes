// es5定义函数的方法
// 函数声明
function fn1() {
}
// 匿名函数
let fn2 = function () {

}

// ts定义函数的方法
/**
 * 如果没有返回值，就写void
 * 有返回值，返回什么类型就写什么
 */
// 函数声明法
function fn3(): string {
  return '这里返回的类型要是字符串类型'
}
// 匿名函数法
let fn4 = function (): number {
  return 134
}


// ts中方法传参
// 函数声明
function getInfo(name: string, age: number): string {
  return `${name}--${age}`
}
console.log(getInfo('啦啦啦啦', 29));

// 匿名函数
let getInfo1 = function (name: string, age: number): string {
  return `${name}--${age}`
}
console.log(getInfo1('lj啦啦', 29));

// 没有返回值

function fn6(): void {
  console.log('我是没有返回值的方法');

}
fn6()

// 方法可选参数 (问号表示可传可不传)
// 可选参数必须配置到参数的最后面
function fn7(name: string, age?: number): void {
  console.log(name, age);

}
fn7('s', 20)
fn7('s')

// 默认参数

function fn8(name: string, number = 20): void {
  console.log(name, number);

}
fn8('张三')
fn8('张三', 23)


// 剩余参数
function fn9(a: number, b: number, c: number): void {
  console.log(a + b + c);
}
fn9(1, 4, 5)

// 三点运算符接收传过来的值
function fn10(...arr10: number[]): void {
  console.log(arr10.reduce((acc, cur) => (acc + cur)));
}
fn10(1, 2, 5, 78, 4, 1)
function fn11(a:number,...arr11:number[]):void{
  arr11.push(a)
  console.log(a); 
  console.log(arr11.reduce((acc,cur)=>(acc+cur)));
}
// 会把1赋值给a
fn11(1, 2, 5, 78, 4, 1)

// 函数重载
/**
 * java中的方法的重载：重载指的是两个或者两个以上同名函数，但它们的参数不一样，这时会出现函数重载的情况
 * typescript中的重载：通过为同一个函数提供多个函数类型定义来试下多种功能的目的
 * 
 * ts为了兼容es5和es6重载的写法，和java中有区别
 */

//  es5中如果出现重名方法，下面的会替换上面的方法

// ts中的重载
function f12(name:string):string;
function f12(age:number):number;
function f12(str:any):any{
  if(typeof str==='string'){
    return `传入的是字符串${str}`
  }else{
    return `年龄${str}`
  }
}
console.log(f12('账单'));
console.log(f12(20));


