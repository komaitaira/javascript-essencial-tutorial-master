window.name = 'John';

const person = {
    name: 'Tom',
    hello: () => {
        console.log('Hello ' + this.name);
    }
}
person.hello();
// アロー関数になっているため、thisはそのコンテキスト内のオブジェクトを参照できない。
// アロー関数の場合、thisはスコープチェーンを辿って一つ上のプロパティを参照しに行く。