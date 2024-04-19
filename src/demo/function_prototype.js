

/*
1、通过构造函数构建的对象，可以直接访问this.xxx定义的属性
let a = new MyAnimal(1,"aaa","descaaaaa")
console.log( 'a',a)
console.log('a.name',a.name);

2、通过构造函数构建的不同对象，修改属性值后互不影响
let a = new MyAnimal(1,"aaa","descaaaaa")
console.log( 'a',a)
let b = new MyAnimal(2,"bbb","descbbbb")
console.log( 'b',b)
b.name ="cccc"
console.log( 'a',a)
console.log( 'b',b)

3、通过构造函数也可以定义方法
function MyObject(id,name,desc){
    this.showMe=function(){
        alert(this)
    }
}

4、每个构造函数都默认有个prototype原型成员，实例有个__proto__成员，new是将类成员变量值prototype赋给实例成员变量值__proto__
let a = new MyAnimal(1,"aaa","descaaaaa")
console.log('a.prototype',a.prototype)  undefined 实例不可访问prototype
console.log('a.__proto__',a.__proto__)  object 实例可访问__proto__
console.log(MyAnimal.prototype===a.__proto__) true  new是将类成员变量值prototype赋给实例成员变量值__proto__

5、prototype属性的作用
 a、就是让该函数所实例化的对象们都可以找到公用的属性和方法，且在属性和方法中使用this指针就是实例的指针
 b、实现对js对象的继承,上面说到，当访问一个对象的成员属性时，如果对象本身没有该属性时，会去它的__proto__对象中找，
 如果找不到，继续找__proto__的__proto__对象中的属性，一直往下找。可以利用这一特性，实现类似于java中的继承，
 MyAnimal.prototype.__proto__ == Object.prototype
 Object.prototype.__proto__==null   体现了构造函数是继承于根对象Object
 */
export function MyAnimal(id,name,desc){
    this.id = id
    this.name=name
    this.desc =desc
    this.showMe=function(){
        alert(this.id+" " + this.name+" " + this.desc)
    }
}
export function MyCat(id,name,desc,legs){
     this.__proto__ = new MyAnimal(id,name,desc)
     this.legs = legs
 }



