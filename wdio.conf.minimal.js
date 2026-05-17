/**
 * Minimal WebDriver.io configuration without Cucumber formatter issues
 * Use with: npx wdio run wdio.conf.minimal.js
 */

exports.config = {
    runner: 'local',
    specs: ['./features/**/*.feature'],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--disable-blink-features=AutomationControlled'],
        }
    }],
    framework: 'cucumber',
    cucumberOpts: {
        require: ['./features/step-definitions/**/*.js'],
        requireModule: [],
        timeout: 60000,
        strict: true,
        dryRun: false,
        failFast: false,
        format: [], // Disable formatters to avoid ESM issues
    },
    services: [
        ['chromedriver', {
            port: 9515,
            args: ['--disable-dev-shm-usage'],
        }]
    ],
    reporters: [],
    logLevel: 'info',
};
