

describe("Given a logger factory", () => {
	it("is defined", () => {
		expect(Logger.LoggerFactory).to.not.be.undefined;
	});

	describe("Given a console logger", () => {
		let logger = null;
		beforeEach(() => {
			logger = Logger.LoggerFactory.getLogger(Logger.Type.CONSOLE, Logger.Level.DEBUG);
		});

		afterEach(() => {
			logger = null;
		});

		it("can request a logger", () => {
			expect(logger).to.not.be.undefined;
		});

		it("can log info", () => {
			const m = logger.info("xx");
			expect(m).to.not.equal("");
		});

		it("can log debug", () => {
			const m = logger.debug("xx");
			expect(m).to.not.equal("");
		});

		it("can log warn", () => {
			const m = logger.warn("xx");
			expect(m).to.not.equal("");
		});
	});

	describe("Given a color console logger", () => {
		let logger = null;
		beforeEach(() => {
			logger = Logger.LoggerFactory.getLogger(Logger.Type.COLOR_CONSOLE, Logger.Level.DEBUG);
		});

		afterEach(() => {
			logger = null;
		});

		it("can request a logger", () => {
			expect(logger).to.not.be.undefined;
		});
	});

/*
	describe("Given a REST logger", () => {
		let logger = null;
		beforeEach(() => {
			logger = Logger.LoggerFactory.getLogger(Logger.Type.REST, Logger.Level.DEBUG);
		});

		afterEach(() => {
			logger = null;
		});

		it("can request a logger", () => {
			expect(logger).to.not.be.undefined;
		});
	});
	*/
});
