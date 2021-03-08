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

    //TODO
    test('Test 2hr, expect 20:00', () => {
		expect(convertSeconds(7200)).toBe('20:00');
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

    test('Test "stopped", return 0min (0)', () => {
		app.setPhase("stopped");
		expect(app.setTimeRemaining("stopped")).toBe(0);
	});

    //TODO
    test('Test "idle", return 0min (0)', () => {
		app.setPhase("idle");
		expect(app.setTimeRemaining("idle")).toBe(0);
	});
});

describe('Test setPageTitle', () => {
	let MMSS;
	beforeEach(() => {
		MMSS = '10:10';
	});
	
	test('Test "work", return "10:10 Work - Potato Timer"', () => {
		app.setPhase("work");
		expect(app.setPageTitle(MMSS)).toBe("10:10 Work - Potato Timer");
	});

    test('Test "short break", return "10:10 Break - Potato Timer"', () => {
		app.setPhase("short break");
		expect(app.setPageTitle(MMSS)).toBe("10:10 Break - Potato Timer");
	});

    test('Test "long break", return "10:10 Break - Potato Timer"', () => {
		app.setPhase("long break");
		expect(app.setPageTitle(MMSS)).toBe("10:10 Break - Potato Timer");
	});

    test('Test "stopped", return "10:10 Stopped - Potato Timer"', () => {
		app.setPhase("stopped");
		expect(app.setPageTitle(MMSS)).toBe("10:10 Stopped - Potato Timer");
	});

    //TODO
    test('Test "idle", return "10:10 - Potato Timer"', () => {
		app.setPhase("idle");
		expect(app.setPageTitle(MMSS)).toBe("10:10 - Potato Timer");
	});
});

describe('Test updatePhase', () => {
	test('Test "work", with short break and long break', () => {
		app.setPhase("work");
		expect(app.updatePhase()).toBe("shot break");
		app.updatePhase();
		app.updatePhase();
		expect(app.updatePhase()).toBe("long break");
	});

    test('Test "short break", return "work"', () => {
		app.setPhase("short break");
		expect(app.updatePhase()).toBe("work");
	});

    test('Test "long break", return "work"', () => {
		app.setPhase("long break");
		expect(app.updatePhase()).toBe("work");
	});

    test('Test "stopped", return "work"', () => {
		app.setPhase("stopped");
		expect(app.updatePhase()).toBe("work");
	});
});