// 【new演算子】
// コンストラクタ関数からインスタンスを作成するために使用する演算子

// ①コンストラクタ関数の戻り値がオブジェクトの場合
// ⇨コンストラクタが返すreturnのオブジェクトを新しいインスタンスオブジェクトとして呼び出し元へ返す
// function F1(a, b) {
//   this.a = a;
//   this.b = b;
//   return {}; //戻り値がオブジェクト
// }

// const instance1 = new F1(1, 2);
// console.log(instance1);


// ②コンストラクタ関数の戻り値がオブジェクト以外、もしくはreturnが定義されていない場合
// ⇨コンストラクタのprototypeのプロパティを__proto__にコピーする。
// このオブジェクトをthisの参照先としてコンストラクタ関数を実行

function F2(a, b) {
  this.a = a;
  this.b = b;
  // return 1; //戻り値がプリミティブ値(オブジェクト以外)
  return {}; //戻り値がオブジェクト
}
F2.prototype.c = function () { }

function newOpe(C, ...args) {
  const _this = Object.create(C.prototype);
  const result = C.apply(_this, args);
  console.log(typeof result);
  if (typeof result === 'object' && result !== null) {
    return result;
  }
  return _this;
}

const instance2 = newOpe(F2, 1, 2);
console.log(instance2);