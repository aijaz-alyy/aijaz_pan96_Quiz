import inquirer from 'inquirer';

let a = await inquirer.prompt([
    {
        name:'a',
        type: 'list',
        message:'hi',
        choice:['a']
    }
]) 