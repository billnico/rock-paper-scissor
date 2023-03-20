 const getRandom=()=>{
    const num=Math.random();
    const number=num*2;
    const returned=Math.round(number + 1);
    return returned
 }

 const getComputerChoice=()=>{
    let words=["empty","Rock","Paper","scissors"];
    return words[getRandom()];
 }
 
 const playRound=(PlayerChoice,ComputerChoice)=>{
    let pChoice=PlayerChoice.toLowerCase();
    let comChoice=ComputerChoice.toLowerCase();
    //return 1 when user wins and 2 when computer wins
    if(pChoice==comChoice){
        return "tie game";
    }
    if(pChoice==="scissors"&&comChoice==="paper"){
        return 1;
    }
    if(pChoice==="paper"&&comChoice==="rock"){
        return 1;
    }
    if(pChoice==="rock"&&comChoice==="scissors"){
        return 1;
    }
    return 2;
 }

 const game=()=>{
     let playerScore=0;
     let computerScore=0;

     for(index=0;index===5;index++){

        let ComputerChoice=getComputerChoice();
        let PlayerChoice=prompt("your choice: ");
        let result=playRound(PlayerChoice,ComputerChoice);

        if(result===1){
            playerScore +=1;
            console.log("won")
        }
        else if(result===2){
            console.log("lost")
            computerScore +=1;
        }
        else{
            console.log("tie game");
        }
     }
     if(playerScore > computerScore){
        return "you won you: "+playerScore+" computer: "+computerScore;
     }
     else if(playerScore < computerScore){
        return "you lost you: "+playerScore+" computer: "+computerScore;
     }
     return "tie game";
 }

 console.log(game());

 