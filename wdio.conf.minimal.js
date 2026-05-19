exports.config = {
    runner: 'local',
    specs: ['./features/**/*.feature'],
    maxInstances: 2,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['--disable-blink-features=AutomationControlled'],
            }
        },
        {
            maxInstances: 1,
            browserName: 'firefox',
            'moz:firefoxOptions': {
                args: [],
            }
        }
    ],
    framework: 'cucumber',
    cucumberOpts: {
        require: ['./features/step-definitions/**/*.js'],
        timeout: 60000,
        strict: true,
        dryRun: false,
        failFast: false,
    },
    services: [],
    reporters: ['spec'],
    logLevel: 'warn',
};
