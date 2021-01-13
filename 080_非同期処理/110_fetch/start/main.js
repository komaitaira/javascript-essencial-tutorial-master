// 【fetch】
// サーバーからデータを取得する時に使う

// 【JSONファイル】
// javasctiptからサーバーに対してデータを取りに行く時や
// サーバーに対してリクエストをする時によく使われるデータ形式
// jsonファイル内ではシングルクォーテーションでデータを囲むことはできない。
// ダブルクォーテーションでプロパティを囲む
console.log(fetch('users.json')); //リクエスト先のurl

// fetch('users.json').then(function (response) {
//   // console.log(response); //okというプロパティがtrueになっていると、サーバーからデータを取得できたことを表している
//   return response.json();
// }).then(function (json) {
//   console.log(json);
//   for (const user of json) {
//     console.log(`I'm ${user.name}, ${user.age} years old`)
//   }
// })

async function fetchUsers() {
  const response = await fetch('users.json');
  const json = await response.json();
  for (const user of json) {
    console.log(`I'm ${user.name}, ${user.age} years old`)
  }
}

fetchUsers();