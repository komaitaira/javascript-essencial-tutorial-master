function sleep(ms) {
  const startTime = new Date();
  while (new Date() - startTime < ms);
  console.log('sleep done');
}

const btn = document.querySelector('button');
btn.addEventListener('click', function(){
  console.log('button clicked');
});

// 同期処理では、メインスレッドでコードが順番に実行される。
// 一つの処理が完了するまで次の処理に進まない

// 非同期処理では、一時的にメインスレッドから処理が切り離される