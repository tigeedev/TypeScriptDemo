// 测试ts >>>>>>>>>>>>>>>>>>>>>>>>>>
// src/ts/index.ts
// function getFirstWord(msg: String) {
//   console.log(msg.split(' ')[0])
// }

// getFirstWord('Hello World')
// getFirstWord(123)

// 接口的使用 >>>>>>>>>>>>>>>>>>>>>>
// 定义用户对象的类型
// interface UserItem {
//   name: string
//   age?: number
//   enjoyFoods: string[]
// }
// // 在声明变量的时候将其关联到类型上
// const petter: UserItem = {
//   name: '111',
//   // age: 12,
//   enjoyFoods: ['11','22']
// }

// 这里继承了 UserItem 的所有属性类型，并追加了一个权限等级属性
// interface Admin extends UserItem {
//   permissionLevel: number
// }

// const admin: Admin = {
//   name: 'petter',
//   enjoyFoods: ['rice','noodle'],
//   permissionLevel: 1
// }

// 这里在继承 UserItem 类型的时候，删除了两个多余的属性
// interface Admin extends Omit<UserItem, 'age' | 'enjoyFoods'> {
//   permissionLevel: number
// }

// const admin: Admin = {
//   name: 'petter',
//   permissionLevel: 1
// }

// 类的使用 >>>>>>>>>>>>>>>>>>>>>>
// 定义一个类
// class User {
//   // constructor 上的数据需要先这样定好类型  
//   name: string

//   // 入参也要定义类型
//   constructor(userName: string) {
//     this.name = userName
//   }

//   getName() {
//     console.log(this.name);
//   }
// }

// // 通过 new 这个类得到的变量，它的类型就是这个类
// const petter: User = new User('petter')
// petter.getName() // Petter

// 类与类之间可以继承>>>>>>>>>>>>>>>>>>
// 这是一个基础类
// class UserBase {
//   name: string
//   constructor(userName: string) {
//     this.name = userName
//   }
// }

// // 这是另外一个类，继承自基础类
// class User extends UserBase {
//   getName() {
//     console.log(this.name);
//   }
// }

// const petter: User = new User('petterrr')
// petter.getName()

// 类也可以提供给接口去继承：>>>>>>>>>>>>>>>>>>>>
// 这是一个类
// class UserBase {
//     name: string
//     constructor(userName: string) {
//         this.name = userName
//     }
// }

// // 这是一个接口，可以继承自类
// interface User extends UserBase {
//     age: number
// }

// // 这样一个变量就必须同时存在两个属性
// const petter: User = {
//     name: 'petter',
//     age: 20
// }

// 如果类上面本身有方法存在，接口在继承的时候也要相应的实现。
// 当然也可以用 Omit 帮助类型来去掉这些方法>>>>>>>>>>>>>>>>>>>>>
class UserBase {
    name: string
    constructor(userName: string) {
        this.name = userName
    }

    // 这是一个方法
    getName() {
        console.log(this.name);
    }
}

// 接口继承类的时候也可以去掉类上面的方法
interface User extends Omit<UserBase, 'getName'> {
    age: number
}

// 最终只保留数据属性，不带有方法
const petter: User = {
    name: 'petter',
    age: 20
}


// 联合类型>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




