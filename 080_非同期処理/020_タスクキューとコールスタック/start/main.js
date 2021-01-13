// 【タスクキュー】
// キュー：　実行待ちの非同期処理の行列のこと
// タスクキュー：　非同期処理の実行順を管理しているキュー
// メインスレッドが占有されている状態：　コールスタックにコンテキストが積まれている状態


const btn = document.querySelector('button');
btn.addEventListener('click', function task2() {
    console.log('task2 done');
});

function a() {
    setTimeout(function task1() {
        console.log('task1 done');
    }, 4000);

    const startTime = new Date();
    while (new Date() - startTime < 5000);

    console.log('fn a done');
}

a();