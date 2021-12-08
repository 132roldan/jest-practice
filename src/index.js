const { CookbookCli } = require('./cookbook-cli');
const { Cookbook } = require('./cookbook');

const ARGS = process.argv.slice(2);
console.log(ARGS)
const [command, name, ingredients] = ARGS;
console.log([command, name, ingredients])

console.log(new CookbookCli(new Cookbook()).run(command, name, ingredients));
