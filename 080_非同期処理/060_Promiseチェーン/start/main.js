// 【Promiseチェーン】
// Promiseを使って非同期処理を順次実行すること

function sleep(val) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

sleep(0).then(function (val) {
  return sleep(val); // thenメソッドの中でPromiseチェーンをつなぐ場合には、必ずコールバックの戻り値にPromiseのインスタンスを返すようにする
}).then(function (val) {
  return sleep(val);
}).then(function (val) {
  return sleep(val);
}).then(function (val) {
  return sleep(val);
})