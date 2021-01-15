// push() / pop() / shift() / unshift() / splice() / concat()
const arry = [1, 2, 3, 4, 5];
console.log(arry);

// 【push】配列の最後に要素を追加。戻り値は追加した要素
const result = arry.push(6);
console.log(arry, result);

// 【pop】配列の最後の要素を削除。戻り値は削除した要素
const result2 = arry.pop();
console.log(arry, result2);

// 【shift】配列の先頭の要素を削除。戻り値は削除した要素
const result3 = arry.shift();
console.log(arry, result3);

// 【unshift】配列の先頭に要素を追加。戻り値は追加した後の配列の長さlength
const result4 = arry.unshift(1);
console.log(arry, result4);

// 【splice】指定したインデックスから指定した長さを切り取る
const result5 = arry.splice(0, 3);
console.log(arry, result5);

// 【concat】配列同士を結合する。ただ、スプレッド演算子を使った方が自由度高い
const result6 = arry.concat(6, 7, 8);
console.log(arry, result6);