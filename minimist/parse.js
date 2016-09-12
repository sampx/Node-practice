
var parseArgs = require('minimist');

var argv = parseArgs(process.argv.slice(2));

console.dir(argv);

console.log(argv._);//打印命令列表
