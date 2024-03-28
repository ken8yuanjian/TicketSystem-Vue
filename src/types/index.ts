//ts 定义一个对象声明
export interface PersonInter{
    id:string,
    name:string,
    age?:number,    //？表示可选赋值
}

//ts 定义一个类型声明
export type PersonList = Array<PersonInter> 
