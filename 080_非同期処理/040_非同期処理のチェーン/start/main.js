function sleep(callback, val) {
  setTimeout(function () {
    console.log(val++);
    callback(val);
  }, 1000);
}

// 非同期処理のコールバックチェーン
// この記述は階層が深くなりコードが読みにくい。⇨そこでPromiseができた。次のレクチャーへ。
sleep(function (val) {
  sleep(function (val) {
    sleep(function (val) {
      sleep(function (val) {
        sleep(function (val) {
  
        }, val)
      }, val)
    }, val)
  }, val)
}, 0)