// 【Promise】
// 非同期処理をより簡単に、可読性が上がるように書けるようにしたもの。
// resolve, rejectの実行自体は同期処理だが、then, catch, finallyの処理は非同期なので、コールスタックがからになったタイミングで実行されることになる

// 記述例
new Promise(function(resolve, reject) {
  resolve('hello'); //thenの実引数としてhelloが入る
  // reject('bye'); //catchの実引数としてbyeが入る
}).then(function (data) {
  console.log(data); //hello
}).catch(function () {
  console.log(data); //bye
}).finally(function () {
  console.log('終了処理'); //resolveでもrejectでもどちらでも呼ばれる
})

new Promise(function (resolve, reject) {
  console.log('promise');
  // resolve('hello');
  setTimeout(function () {
    reject('bye');
  }, 1000);
}).then(function (data) {
  console.log('then:' + data);
  // throw new Error();
  return data;
}).then(function (data) {
  console.log('then:' + data);
}).catch(function (data) {
  console.log('catch:' + data);
}).finally(function () {
  console.log('finally');
})

console.log('global end');