// 【クラス】
// コンストラクタ関数をクラス表記で書けるようにしたもの
// クラスはコンストラクタ関数のシンタックスシュガー
// 既にあるものを簡単に書けるようにしたものをシンタックスシュガーという
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // constructorと同じスコープに記述することで、prototypeに記述することになる
  hello() {
    console.log('hello ' + this.name);
  }
}

const bob = new Person('Bob', 23);
console.log(bob);

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.hello = function() {
//   console.log('hello ' + this.name);
// }