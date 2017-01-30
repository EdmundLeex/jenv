#!/usr/bin/env node

const shell = require('shelljs');

const command = process.argv.slice(2)[0];

if (command === 'init') {
  shell.exec('mkdir config');
  shell.exec('cp lib/env_template.json config/env.json');
  console.log('config/env.json');
} else {
  console.error(`${command} is an invalid command`);
}
