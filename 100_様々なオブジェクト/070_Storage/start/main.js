// 【Storage】
// ブラウザの保存領域にデータを格納するためのオブジェクト⇨localStorage

const obj = { a: 0 }; //オブジェクトの定義
const json = JSON.stringify(obj);　//objをjsonに変換
localStorage.setItem('key', json); //localStorageにjsonを格納
const result = localStorage.getItem('key'); //localStorageからkeyを参照して値(json)を取得し、resultに代入
const obj2 = JSON.parse(result); //result(json)をオブジェクトに変換し変数obj2に代入
console.log(obj2); //オブジェクト形式で出力
console.log('end'); //localStorageは同期処理なので、endはobj2の後に出力される