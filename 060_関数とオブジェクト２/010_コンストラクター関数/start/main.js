// 【コンストラクタ関数】
// オブジェクトを生成するための関数
// 【インスタンス化】
// new演算子を使ってコンストラクタ関数からオブジェクトを作成する
// 【インスタンス】
// インスタンス化により作成されたオブジェクトのこと

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const bob = new Person('Bob', 18);
const tom = new Person('Tom', 20);
const sun = new Person('Sun', 22);
console.log(bob); //Person { name: 'Bob', age: 18 }
console.log(tom); //Person { name: 'Tom', age: 20 }
console.log(sun); //Person { name: 'Sun', age: 22 }
