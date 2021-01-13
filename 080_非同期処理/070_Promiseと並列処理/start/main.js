function sleep(val) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

Promise.all([sleep(2), sleep(3), sleep(4)]).then(function () {
  console.log('end'); //反復可能オブジェクトが全て完了した時にthenメソッドが呼ばれるので、最後にendが表示される
});

sleep(0).then(function(val) {
  return sleep(val);
}).then(function(val) {
  return sleep(val);
}).then(function(val) {
  return sleep(val);
})
