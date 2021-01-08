// 【プロトタイプ継承】
// 別のコンストラクタ関数のプロトタイプを受け継いで、機能を流用できるようにすること
// => コンストラクタ間で機能の受け渡しができるようになるため、効率的にプログラムを書くことできる

// 【継承】
// 別のコンストラクタ関数を受け継ぐこと

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function() {
  console.log('hello ' + this.name);
}

function Japanese(name, age, gender) {
  Person.call(this, name, age); //コンストラクタ関数内のthisはnew演算子で生成されたオブジェクトを参照する
  this.gender = gender;
}

Japanese.prototype = Object.create(Person.prototype);

Japanese.prototype.hello = function() {
  console.log('konnichiwa ' + this.name);
}

Japanese.prototype.bye = function() {
  console.log('sayonara ' + this.name);
}

const taro = new Japanese('taro', 23, 'male');
console.log(taro);
taro.hello();
taro.bye();