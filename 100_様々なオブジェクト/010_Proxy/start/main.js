// 【Proxy】
// プロパティの操作に独自の処理を追加するためのオブジェクト

const targetObj = { a: 0 };
const handler = {
  set: function (target, prop, value, receiver) {
    console.log(`[set]: ${prop}`);
    // target[prop] = value;
    throw new Error('cannnot add prop.');
  },
  get: function (target, prop, receiver) {
    if (target.hasOwnProperty(prop)) {
      return target[prop];
    } else {
      return '-1';
    }
    console.log(`[get]: ${prop}`);
  },
  deleteProperty: function (target, prop) {
    console.log(`[delete]: ${prop}`);
    delete target[prop];
  }
}

const pxy = new Proxy(targetObj, handler);
// pxy.a = 1;
console.log(pxy.b);
console.log(pxy.a);
delete pxy.a;