import inquirer from "inquirer";
  

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
    {
        name:"userGuessNumber",
        type:"number",
        message:"Enter your guess number( Number limit from 1 to 5)"
    },
]);

if(answer.userGuessNumber===randomNumber){
    console.log("Congratulations! you guess a correct number")
}else{
    console.log("Please try again as you guess a wrong number")
};