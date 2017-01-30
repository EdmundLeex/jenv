const shell = require('shelljs');

shell.exec('mkdir config');
shell.exec('cp lib/env_template.json config/env.json');