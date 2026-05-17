const path = require('path');

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
        }
    ],
    framework: 'cucumber',
    cucumberOpts: {
        require: ['./features/step-definitions/**/*.js'],
        timeout: 60000,
        format: [],
    },
    services: [
        ['chromedriver', {
            port: 9515,
            args: ['--disable-dev-shm-usage'],
        }]
    ],
    reporters: ['spec'],
};
