const chalk = require('chalk');

module.exports = args =>
  console.log(
    chalk.yellow(
      JSON.stringify(args, null, 2)
    )
  );