const vennGulp = require('venn-gulp-tasks')

const config = require('./project.json');

vennGulp.config(config);

vennGulp.run();
