var myExternalFileObject = {
	foo: 'bar'
}

var myExternalPointerFunction = () => {
	console.log ('You called?');
}

var myExternalNormalFunction = function () {
	console.log ('Normal function reporting');
}

var myExternalParameterFunction = function (value) {
	console.log ('external parameter function logging passed-in value:', value);
}