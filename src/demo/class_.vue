<template>
    <div >
        <h2> class </h2>
        
    </div>
</template>
<script  setup name="class_">
//es5 类定义
//手机类
/*function Phone(brand,price){
    this.brand = brand
    this.price = price
}
//添加方法
Phone.prototype.call = function(){
    alert(this.brand +',' + this.price)
}
let Huawei = new Phone('华为',5999)
Huawei.call()*/

//es6 类定义
class Phone{
    #price      //#开始的变量名会作为private
    constructor(brand,price){
        this.brand = brand
        this.#price = price
    }
    // get set 属性，不能和字段重名，否则递归调用引起堆栈溢出
    get price(){
        return this.#price
    }
    set price(v){
        this.#price = v
    }
    call(){
        alert(this.brand +',' + this.price)
    }
}
//let onePlus = new Phone('onePlus',1999)
//onePlus.call()

//es6 类继承
class SmartPhone extends Phone{
    constructor(brand,price,size,color){
        super(brand,price)
        this.size=size
        this.color=color
    }
    photo(){
        alert("拍照")
    }
    call(){
        alert('call 方法重写了')
        super.call()  
    }
}

let xiaoMi = new SmartPhone('xiaomi',2999,'5.5 inch','black')
xiaoMi.price = 3999
xiaoMi.call()
xiaoMi.photo()







</script>

<style scoped>

</style>