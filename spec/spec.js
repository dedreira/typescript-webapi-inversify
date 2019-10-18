const Jasmine = require('jasmine');
const JasmineConsoleReporter = require('jasmine-console-reporter');
const JUnitReporter = require('jasmine-reporters').JUnitXmlReporter;


const jasmine = new Jasmine();
var reporter = new JasmineConsoleReporter({
        colors: 1,
        cleanStack: 3,
        verbosity: 4,
        listStyle: 'indent',
        activity: false
});
var junitreporter = new JUnitReporter({
        savePath:'coverage/junit'
})
jasmine.addReporter(reporter);
jasmine.addReporter(junitreporter);
jasmine.showColors(true);
jasmine.loadConfigFile('jasmine.json');
jasmine.execute();