function Person1(name, age) {
	this.name = name;
	this.age = age;
}

Object.defineProperty(Person1.prototype, 'name', {
	get: function () {
		return this._name;
	},
	set: function(val) {
		this._name = val;
	}
});

const p1 = new Person1('Bob', 23);
console.log(p1.name);
p1.name = 'Tom'
console.log(p1.name);

class Person2 {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	get name() {
		return this._name;
	}
	set name(val) {
		this._name = val;
	}

	// class内で使用できる静的なメソッドを定義する時に使う。
	static hello() {
		console.log('hello');
	}
}

// インスタンス化を使用しなくても使える
Person2.hello();