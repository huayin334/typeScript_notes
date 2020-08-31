// 接口扩展：接口可以继承接口
interface Animals {
  eat(): void
}
interface Person extends Animal {
  work(): void;
}
class Programmer {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  coding(){
    console.log('写代码');  
  }
}

// 可以继承，也可以实现接口
class Web extends Programmer implements Person {
  public name: string;
  constructor(name: string) {
    super(name);
    this.name = name   
  }
  eat() {
    console.log(this.name + '喜欢吃馒头');

  }
  work() {
    console.log('写代码');
  }
}
let xiaolei = new Web('xiaolei')
xiaolei.eat()