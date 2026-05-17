const path = require('path');

exports.config = {
    runner: 'local',
    specs: ['./features/**/*.feature'],
    maxInstances: 1,
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
    },
    port: 9515,
    path: '/',
    reporters: ['spec'],
};
