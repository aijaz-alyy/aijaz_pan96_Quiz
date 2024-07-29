#!/usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
const questionAns = {
    q1: "Mount Everest",
    q2: "Pacific Ocean",
    q3: "Mona Lisa",
    q4: "Neil Armstrong",
    q5: "Shakespeare",
};
let totalScore = 10;
let score = 0;
console.log(chalk.bgBlueBright("\t\nWelcome to the quiz (Aijaz) \n\t"));
const main = async () => {
    while (true) {
        let quiz = async (question, choices, correctAnswer) => {
            let { Myanswer } = await inquirer.prompt({
                name: "Myanswer",
                type: "list",
                choices: choices,
                message: question,
            });
            if (Myanswer === correctAnswer) {
                console.log(chalk.greenBright("\n\tcorrect answer\n\t"));
                score += 2;
            }
            else {
                console.log(chalk.redBright("\n\twrong answer\n\t"));
            }
        };
        await quiz("What is the name of the highest mountain on Earth?", ["K2", "Kilimanjaro", questionAns.q1], questionAns.q1);
        await quiz("Which is the largest ocean in the world?", ["Atlantic Ocean", questionAns.q2, "Indian Ocean"], questionAns.q2);
        await quiz("What is the name of the famous painting by Leonardo da Vinci?", [questionAns.q3, "Starry Night", "The Scream"], questionAns.q3);
        await quiz("Who was the first person to step on the moon?", ["Buzz Aldrin", "Michael Collins", questionAns.q4], questionAns.q4);
        await quiz("Who wrote plays like ‘Romeo and Juliet’ and ‘Hamlet’?", ["Charles Dickens", questionAns.q5, "Jane Austen"], questionAns.q5);
        console.log(chalk.magentaBright(`\n\t Total score is ${totalScore}\t\n`));
        console.log(chalk.bgGreenBright(`\n\t Your obtained score is ${score}\t\n`));
        let reAttempt = await inquirer.prompt({
            name: "confirm",
            type: "confirm",
            message: "Do you want to reattempt the Quiz?",
            default: "true",
        });
        if (reAttempt.confirm === false) {
            console.log(chalk.bgYellowBright("\nThanks for Attempting Quiz\n"));
            console.log(chalk.magentaBright(`\n\t Your Total score is ${totalScore}\t\n`));
            console.log(chalk.bgGreenBright(`\n\t Your obtained score is ${score}\t\n`));
            break;
        }
    }
};
main();
