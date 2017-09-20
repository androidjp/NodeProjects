const mathLib = require('./mathLib');

test('adds 1 + 2 to equal 3', () => {
	expect(mathLib.sum(1,2)).toBe(3);
});
