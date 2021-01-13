// function a() {
//   setTimeout(function task1() { //②関数aからsetTimeout(非同期API)が呼ばれtask1がタスクキューに登録される
//     console.log('task1 done');
//   });

//   console.log('fn a done');
// }

// function b() {
//   console.log('fn b done');
// }

// a(); //①まずグローバルコンテキストから関数aが実行される（コールスタックに積まれている）

// b(); //③関数bがコールスタックに積まれる（ここで、関数bがコールスタックにあるためタスクキューにあるtask1は、コールスタックに空きがないと実行されない）

// したがって上記の書き方になると、実行される順番として
// 1. fn a done
// 2. fn b done
// 3. fn task1 done
// という順番になる。
// fn b の表示をtask1より遅くするためには、

function a(b) {
  setTimeout(function task1() { //②関数aからsetTimeout(非同期API)が呼ばれtask1がタスクキューに登録される
    console.log('task1 done'); //この時、setTimeoutの実行時に関数bの実行を一緒にするようにしてあげると、task1 doneの後にfn bが実行されるようになる
    b();
  });

  console.log('fn a done');
}

function b() {
  console.log('fn b done');
}

a(b); //①まずグローバルコンテキストから関数aが実行される（コールスタックに積まれている）

