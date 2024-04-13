#! /usr/bin/env node

import inquirer from "inquirer"

const random_number = Math.floor(Math.random()*10)

console.log("Welcome to the number guessing game")
const input = await inquirer.prompt([
    {"message":"enter any no","name":"guessed_no","type":"number"}
])

if(input.guessed_no == random_number){
    console.log("Congratulations! you won the game")
}
else{
    console.log("You guessed wrong number!")
}