// 布尔类型(boolean)
let flag: boolean = true

// 数字类型(number)
let a: number = 123;

// 字符串类型(string)
let str: string = '122'
console.log(str);

// 数组类型(array)
// 定义方式1
let arr1: number[] = [1, 2, 3]
// 定义方式2（泛型）
let arr2: Array<string> = ['2', 'e']
// 定义方式3(any)
// any代表包含任意的类型
let arr3:any[]=['saidju',123,null,undefined,true]

// 元祖类型(tuple): 属于数组的一种
// 可以指定数组的多种类型
let arr4: [string, number, boolean] = ['23', 23456, false]

// 枚举类型(表示状态)
enum Flag { success = 1, error = 0, kkk }

// 如果都没有赋值，就是索引值
// 如果前面的赋值了，后面的没赋值，后面的取前面一个+1
let f: Flag = Flag.success
let f1: Flag = Flag.kkk
console.log(f);
console.log(f1);


// 一个元素可能是number或者空或者undefined
let nums: number | null | undefined
nums = 2
console.log(nums);


// void类型(ts中的void表示返回值没有任何类型，一般用于定义方法的时候方法没有返回任何类型)

function run(): void {
  console.log('run');
}

run()

// 如果有返回值
// 返回值是number
function run2():number{
  return 123
}

// never类型：是其他类型(包括null和undefined)的子类型，代表从不会出现的值
// 这意味着声明never的变量只能被never类型所赋值
let a1:never 
a1=(()=>{
  throw new Error('错误')
})()



