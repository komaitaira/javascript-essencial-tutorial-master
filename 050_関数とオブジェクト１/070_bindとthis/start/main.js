window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
person.hello();
// オブジェクトのメソッドとして関数を呼び出しているので、その呼び出し先のthisの参照先は呼び出し元のpersonオブジェクトのnameプロパティであるTomが呼ばれる

function fn(ref) {
    ref();
}

fn(person.hello);
// コールバック関数としてperson.helloを実引数に渡すと、refと言う仮引数(変数)にhelloプロパティの関数が渡る。あくまでも関数の呼び出しになるので、
// その中のthisの参照先はグローバルオブジェクトのプロパティであるJhonが呼ばれる


const bindedPerson = person.hello.bind(person);
fn(bindedPerson);
// bind
// bindメソッドを使うことにより、thisや引数を固定した新しい関数を作成することができる
// これをthisの束縛と言う