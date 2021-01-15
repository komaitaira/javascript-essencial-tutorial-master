const wm = new WeakMap(); //wmはexportされていないので外部からはアクセスできない

export class Person {
    constructor(name, age) {
        // this._name = name; //「_(アンダースコア)」から始まる変数は、プライベート変数、またはプライベートプロパティと呼び、外部から使用しないように、ということを明示的に示しているもの。
        wm.set(this, {
            name
        })
    }

    hello() {
        console.log(`hello ${wm.get(this).name}`);
    }
}
