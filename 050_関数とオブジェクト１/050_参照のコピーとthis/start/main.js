const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
person.hello();

// thisの参照先
// オブジェクトのメソッドとして呼ばれた場合、呼び出し元のオブジェクトを参照する
// 関数として呼ばれた場合、グローバルオブジェクを参照する