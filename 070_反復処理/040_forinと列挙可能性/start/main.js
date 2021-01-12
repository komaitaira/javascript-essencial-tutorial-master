const obj = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3'
}

Object.prototype.method = function () { }
Object.defineProperty(Object.prototype, 'method', {
	enumerable: false
});

const d = Object.getOwnPropertyDescriptor(Object.prototype, 'method');
console.log(d);

for (let key in obj) {
	if (obj.hasOwnProperty(key)) {
		console.log(key, obj[key]);	
	}
}