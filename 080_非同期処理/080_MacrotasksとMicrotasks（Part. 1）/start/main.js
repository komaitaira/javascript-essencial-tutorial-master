// 【マクロタスク】
// これまでのレクチャーでタスクキューと呼んでいた物
// setTimeout, setInterval, requestAnimationFrameなど

setTimeout(function task1() {
  console.log('task1');
});

// 【マイクロタスク】ジョブキュー
// タスクキューとは別で存在する非同期処理の待ち行列
// Promises, queueMicrotask, MutationObserverなど
new Promise(function promise(resolve) {
  console.log('promise');
  resolve();
}).then(function job1() {
  console.log('job1');
});

console.log('global end');

// マクロタスクとマイクロタスクが同じイベントのループで発見された時には、
// 必ずマイクロタスクから処理が実行される