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

 let playerScore=0;
 let computerScore=0;
 
 let bod=document.querySelector("body");

 let scoreLine=document.getElementById("score");

let buttons=document.querySelectorAll("button");

for(let button of buttons){ 
 button.addEventListener("click",(e)=>{
    console.log("called");

    let playerSelect=e.target.innerText;

    let computerSelect=getComputerChoice();

    let result=playRound(playerSelect,computerSelect);
    
    if(result===1){
        playerScore +=1;
    }
    if(result===2){
        computerScore +=1;
    }

    let res=checkWinner()
    scoreLine.innerText= "player: "+playerScore+" computer: "+computerScore;
    if(res.length>1){
        scoreLine.innerText="player: "+playerScore+" computer: "+computerScore+" "+res;
    }
    bod.appendChild(scoreLine);

})
};

const checkWinner=()=>{
    let text="";
    console.log(playerScore,computerScore);
    if(playerScore>4||computerScore>4){
        if(playerScore>computerScore){
            return "you win"
        }
        else{
            return "you lose"
        }
    }
    return text;
}

 