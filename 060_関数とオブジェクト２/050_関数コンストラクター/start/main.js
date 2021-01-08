const fn1 = new Function('a', 'b', 'return a + b');

const result = fn1(1, 2);
console.log(result);

function fn2(a, b) {
  return a + b;
}
console.log(fn2 instanceof Function);


// 関数コンストラクタを使用した時に気をつけることとして、
// 外部変数を使用した時にはグローバルスコープやスクリプトスコープを探しに行く
