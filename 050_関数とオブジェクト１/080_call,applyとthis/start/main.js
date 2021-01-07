function a(name) {
    console.log('hello ' + name);
}

const b = a.bind(null, 'Tim');

b();

// applyとcallはbindと違い、変数に入れることなく即時で実行される
a.apply(null, ['Tom']) // applyは第一引数にthisの参照先のオブジェクト、第二引数に配列を渡す。
a.call(null, 'Bob')  // callは第一引数にthisの参照先のオブジェクト、第二引数に引数を渡す