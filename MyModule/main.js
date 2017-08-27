const algorithm = require('algorithm');
{	var arr = [
		1,-1,2,-2,3,-3
	];
	var strs = {
		a : 'ababccce',
		b : 'abc'
	};
	console.log(algorithm.gcd(12,36));
	console.log('hello world@');
	console.log(algorithm.kmp(strs['a'],strs['b']));
}