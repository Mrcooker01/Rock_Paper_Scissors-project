const choices = ["rock", "paper", "scissors"]
let computerscore = 0
let userscore = 0
while(true){
    const random = Math.floor(Math.random() * 3)
    const computerchoice = choices[random]
    const user = prompt("Enter rock or paper or scissors: ")
    if (user === null){ 
        console.log('You cheated') 
        break}
    const user1 = user.toLowerCase().trim()
    if (user1 !== "rock" && user1 !== "paper" && user1 !== "scissors"){
        console.log("You cheated");
        break;
    }
    else {
        if (user1 === computerchoice ){
            console.log("Draw!");
            console.log(`Your choice is: ${user1}`);
            console.log(`Computer choice is: ${computerchoice}`);
            console.log(`Your score is: ${userscore}`);
            console.log(`Computer score is: ${computerscore}`);
        } else {
            if (user1 === 'paper' && computerchoice === 'rock'){
                userscore ++
                console.log("Win!");
            console.log(`Your choice is: ${user1}`);
            console.log(`Computer choice is: ${computerchoice}`);
            console.log(`Your score is: ${userscore}`);
            console.log(`Computer score is: ${computerscore}`);
            }
            else if(user1 === 'rock' && computerchoice === 'scissors'){
                 userscore ++
                console.log("Win!");
            console.log(`Your choice is: ${user1}`);
            console.log(`Computer choice is: ${computerchoice}`);
            console.log(`Your score is: ${userscore}`);
            console.log(`Computer score is: ${computerscore}`);
            }
            else if (user1 === 'scissors' && computerchoice === 'paper'){
                 userscore ++
                console.log("Win!");
            console.log(`Your choice is: ${user1}`);
            console.log(`Computer choice is: ${computerchoice}`);
            console.log(`Your score is: ${userscore}`);
            console.log(`Computer score is: ${computerscore}`);
            }
            else if(user1 === 'paper' && computerchoice === 'scissors'){
                 computerscore ++
                console.log("lose!");
            console.log(`Your choice is: ${user1}`);
            console.log(`Computer choice is: ${computerchoice}`);
            console.log(`Your score is: ${userscore}`);
            console.log(`Computer score is: ${computerscore}`);
            }
            else if(user1 === 'rock' && computerchoice === 'paper'){
                computerscore ++
                console.log("lose!");
            console.log(`Your choice is: ${user1}`);
            console.log(`Computer choice is: ${computerchoice}`);
            console.log(`Your score is: ${userscore}`);
            console.log(`Computer score is: ${computerscore}`);
            } else {
                computerscore ++
                console.log("lose!");
            console.log(`Your choice is: ${user1}`);
            console.log(`Computer choice is: ${computerchoice}`);
            console.log(`Your score is: ${userscore}`);
            console.log(`Computer score is: ${computerscore}`);
            }
        }
    }
}