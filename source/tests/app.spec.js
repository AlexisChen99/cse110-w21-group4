var app = require('../app')
describe('Test convertSeconds', () => {
	test('Test 0s, expect 00:00', () => {
		expect(app.convertSeconds(0)).toBe('00:00');
	});

    test('Test <1min, expect 00:xx', () => {
		expect(app.convertSeconds(15)).toBe('00:15');
	});

    test('Test 1min, expect 01:00', () => {
		expect(app.convertSeconds(60)).toBe('01:00');
	});

    test('Test >1min, expect 01:0x', () => {
		expect(app.convertSeconds(65)).toBe('01:05');
	});

    test('Test 1hr, expect 60:00', () => {
		expect(app.convertSeconds(3600)).toBe('60:00');
	});
});

describe('Test setTimeRemaining', () => {
	test('Test "work", return 15min (900)', () => {
		app.setPhase("work");
		expect(app.setTimeRemaining()).toBe(900);
	});

    test('Test "short break", return 5min (300)', () => {
		app.setPhase("short break");
		expect(app.setTimeRemaining("short break")).toBe(300);
	});

    test('Test "long break", return 25min (1500)', () => {
		app.setPhase("long break");
		expect(app.setTimeRemaining("long break")).toBe(1500);
	});
});

describe('Test setPageTitle', () => {
	let MMSS;
	beforeEach(() => {
		MMSS = '10:10';
	});
	
	test('Test "work", return "10:10 Work - "', () => {
		app.setPhase("work");
		expect(app.setPageTitle(MMSS)).toBe("10:10 Work - ");
	});

    test('Test "short break", return "10:10 Break - "', () => {
		app.setPhase("short break");
		expect(app.setPageTitle(MMSS)).toBe("10:10 Break - ");
	});

    test('Test "long break", return "10:10 Break - "', () => {
		app.setPhase("long break");
		expect(app.setPageTitle(MMSS)).toBe("10:10 Break - ");
	});

    test('Test "stopped", return "10:10 Stopped - "', () => {
		app.setPhase("stopped");
		expect(app.setPageTitle(MMSS)).toBe("10:10 Stopped - ");
	});
});
