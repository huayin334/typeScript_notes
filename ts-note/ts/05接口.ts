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
function printLabel(label: string): void {
  console.log('printLabel');
}
printLabel('hhha')

// ts中自定义方法传入参数对json进行约束  (这里的其实是对象)
function printLabel1(labelInfo: { label: string }): void {
  console.log('printLabel')
}
printLabel1({ label: 'lalla' })

// 对传入的批量的方法进行约束
interface FullName {
  firstName: string;
  secondName: string;
}
function printName(name: FullName) {
  // 必须传入对象：firstName secondName
  console.log(name.firstName, name.secondName);
}
printName({ firstName: 'aa', secondName: 'bbb' })

function printInfo(info: FullName) {
  console.log();
}

//  接口，可选属性
interface FullName1 {
  firstName: string;
  secondName: string;
}

function getName(name: FullName1) {
  console.log(name);
}
//参数的顺序可以不一样
// getName({firstName})

// 1.1.属性类型接口--实现ajax
interface Config {
  type: string;
  url: string;
  data?: string;
  dataType: string;
}

function ajax(config: Config) {
  let xhr = new XMLHttpRequest();
  xhr.open(config.type, config.url, true);
  xhr.send(config.data);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      if(config.dataType=='json'){
        JSON.parse(xhr.responseText)
      }else{
        console.log(xhr.responseText);    
      }
      console.log('成功');
    }
  }
}

// ajax({
//   type:'get',
//   url:'http://www.baidu.com',
//   dataType:'json'
// })

// 2.函数类型接口：对方法传入的参数和返回值进行约束，批量约束
interface encrypt{
  (key:string,value:string):string
}

let md5:encrypt = function(key:string,value:string):string{
  // 模拟操作
  return key+value;  
}

console.log(md5('name','lisi'));

let sha1:encrypt =function(key:string,value:string):string{
  // 模拟操作,另一种实现
  return key+'-----'+value;  
}
console.log(sha1('name','lisi'));

// 3.可索引约束，数组，对象的约束，不常用
// 以前的方式：
let arr:number[] = [1,2,4,5]
let arr11:Array<string> = ['1']
// 数组
interface UserArr{
  [index:number]:string
}
let arr22:UserArr = ['d','asx']
// 对象
interface UserObj{
  [index:string]:string
}
let arr33:UserObj = {
  'name':'ss'
}

// 4.类类型接口：对类的约束 和抽象类有点相似
// 相当于把属性和方法整合在一起
interface Animal{
  name:string;
  eat(str:string):void;
}

// 实现Animal接口
class Dog implements Animal{
  name:string;
  constructor(name:string){
    this.name = name;
  }
  eat(){
    console.log(this.name+'吃粮食');
  }
}
let d = new Dog('小黑')
d.eat()