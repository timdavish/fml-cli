#!/usr/bin/env node
"use strict";

const chalk = require('chalk');
const meow = require('meow');
const request = require('snekfetch');
const $ = require('cheerio').load;

const cli = meow({
  description: false,
  help: `
    Usage
      ${chalk.yellow('fml [command] [option]')}

    Commands
      ${chalk.yellow('*, random')}            Serve random fml
      ${chalk.yellow('top')}                  Serve top fml

    Options
      ${chalk.yellow('--search, -s')}         Add search term
      ${chalk.yellow('--version, -v')}        Print version
      ${chalk.yellow('--help, -h')}           Print help

    Examples
      fml                  ${chalk.dim('# Print random fml')}
      fml top              ${chalk.dim('# Print top fml')}
      fml -s meme          ${chalk.dim('# Print searched fml')}
  `,
  flags: {
    search: {
      type: 'string',
      alias: 's'
    },
    version: {
      type: 'boolean',
      alias: 'v'
    },
    help: {
      type: 'boolean',
      alias: 'h'
    }
  }
});

run(cli.input, cli.flags);

function run (input, flags) {
  const command = input[0];
  const search = flags.search;

  let url = 'http://fmylife.com/random';

  if (command === 'top') {
    url = 'http://fmylife.com/tops/top'
  } else if (search) {
    url = `http://fmylife.com/search/${encodeURIComponent(search)}`
  }

  request.get(url).then(res => {
    const fml = loadFml(res.body);

    console.log(chalk.blue(fml));
  });
}

function loadFml (body) {
  const fmls = $(body)('p.block').text()
    .split('\n\n')
    .map(f => f.trim())
    .filter(f => f.length && f.endsWith('FML'));
  const random = Math.floor(Math.random() * fmls.length);

  return fmls[random];
}
