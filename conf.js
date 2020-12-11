exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    allScriptsTimeout: 120000,
    specs: ['returnFlightTest.js'],
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                "--ignore-certificate-errors"
            ]
        }
    }
};