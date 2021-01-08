function Person(name, age) {
    this.name = name;
    this.age = age;
}

// コンストラクタ関数からオブジェクトをインスタンス化した際にはprototypeの参照が__proto__にコピーされる。
// 参照のコピーなので、Person関数に直接メソッドを定義するよりも、メモリを効率的に使うことができる。
Person.prototype.hello = function () {
    console.log(`hello ${this.name}`);
}

const bob = new Person('Bob', 18);
const tom = new Person('Tom', 33);
const sun = new Person('Sun', 20);

bob.hello();
tom.hello();