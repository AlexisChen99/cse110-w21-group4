const math = require('../example');
describe('Calculator tests', () => {
	test('adding 1 + 2 should return 3', () => {
		expect(math.sum(1, 2)).toBe(3);
	});

	test('subtract 10 - 8, return 2', () => {
		expect(math.diff(10, 8)).toBe(2);
	});
});