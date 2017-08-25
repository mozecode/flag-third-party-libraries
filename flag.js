#!/usr/bin/env node

const chalk = require('chalk');

for(var i=1; i<8; i++){
    process.stdout.write(chalk.white.bgBlue(' * ').repeat(7));
    if(i % 2 !==0 ){
        process.stdout.write(chalk.bgRed(' ').repeat(29));
        console.log('');
    }else{
        process.stdout.write(chalk.bgWhite(' ').repeat(29));
        console.log('');
    }
};

for(var j =8; j<14; j++){
    if(j%2 === 0){
        process.stdout.write(chalk.bgWhite(' ').repeat(50));
        console.log('');
    }else{
        process.stdout.write(chalk.bgRed(' ').repeat(50));
        console.log('');
    }
};

