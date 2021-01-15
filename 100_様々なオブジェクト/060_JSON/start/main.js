const obj = {a: 0, b: 1, c: 2};

function replacer(prop, val) {
  if (val < 1) {
    return;
  }
  return val;
}

// 【JSON.stringify】
// ⇨オブジェクトからjsonを作成する。オブジェクトのままではサーバーにデータを渡すということはできないので、jsonに変換してから渡す。
// const json = JSON.stringify(obj, replacer);
const json = JSON.stringify(obj, ["a", "b"]);
console.log(typeof json);
console.log(json);

// 【JSON.parse】
// ⇨jsonからオブジェクトを作成する
const obj2 = JSON.parse(json);
console.log(typeof obj2);
console.log(obj2);