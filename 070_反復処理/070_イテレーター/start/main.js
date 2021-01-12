// 【イテレーター】
// 反復操作を行う際にしようするオブジェクト
// ⇨決められたルールに沿って記述

// 以下のような書き方
// function genIterator() {
//   // genIteratorでreturnされているオブジェクト部分、これをイテレーターという
//   return {
//     next: function () {　//nextメソッドを保持している。return値としてオブジェクトを返却している
//       return {
//         done: true / false, //ループの継続
//         value: 値 //返却する値
//       }
//     }
//   }
// }

function genIterator(max = 10) {
  let i = 0;
  return {
    next: function () {
      if (i >= max) {
        return {
          done: true
        }
      } else {
        return {
          done: false,
          value: i++
        }
      }
    }
  }
}

const it = genIterator(10);

let a = it.next();
// while (!a.done) {
//   console.log(a.value);
//   a = it.next();
// }

const obj = {
  [Symbol.iterator]: genIterator
}

for (const i of obj) {
  console.log(i);
}