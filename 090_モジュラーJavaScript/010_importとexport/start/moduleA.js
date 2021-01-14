// 【モジュール】
// ソースコードを機能毎に分割して、メンテナンスしやすくする仕組み
// 代表的なものにESMとCJSがある


export let publicVal = 0;

export function publicFn() {
  console.log('publicFn called');
}

export default 1;