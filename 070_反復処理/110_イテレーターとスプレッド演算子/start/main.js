// スプレッド演算子はイテレーターの操作に従う。

const arry1 = [1, 2, 3, 4, 5];
const arry2 = [...arry1];
arry2.push(6);
console.log(arry1);
console.log(arry2);
console.log(arry1 === arry2); //arry2は新しい配列として作成されている

function sum(...args) { //レストパラメーター
  let ret = 0;
  for (let v of args) {
    ret = ret + v;
  }
  return ret;
}
const result = sum(1, 2, 3, 4);
console.log(result);