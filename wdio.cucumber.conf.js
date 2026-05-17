exports.config = {
    runner: 'local',
    specs: ['./features/**/*.feature'],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
    }],
    framework: 'cucumber',
    cucumberOpts: {
        require: ['./features/step-definitions/**/*.js'],
        timeout: 60000,
    },
    services: ['selenium-standalone'],
    reporters: ['spec'],
};
