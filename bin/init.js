#!/usr/bin/env node

const shell = require('shelljs');
const app = require('commander');

app.command('init').action(function () {
  shell.exec('mkdir config');
  shell.exec('cp lib/env_template.json config/env.json');
});