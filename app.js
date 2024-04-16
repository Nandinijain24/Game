let userScore= 0;
let  compScore= 0;

 const choices= document.querySelectorAll(".choice");
 const msg= document.querySelector("#msg");
 const msgg= document.querySelector("#user");
 const msggg= document.querySelector("#comp");



const genCompChoice=() =>{
    const options =["rock","paper","scissors"];
    const ranINDX=Math.floor(Math.random() * 3);
    return options[ranINDX];
};
const drawGame=(userWin)=>{
    console.log("game was draw.");
    msg.innerText ="Game was draw";
    msg.style.backgroundColor ="coral";
}
const showWinner = (userWin)=>{
if(userWin){
userScore++;
    msgg.innerText=userScore;
    msg.innerText ="you win";
  
    msg.style.backgroundColor ="green";
} else {
    compScore++;
    msggg.innerText=compScore;

    msg.innerText ="you lose";
    msg.style.backgroundColor ="red";
}
};
const playGame =(userChoice) => {
    console.log("user choice = ",userChoice);
  const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice);
  
    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //scissors ,paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        }else {
           userWin = compChoice === "rock" ? false : true;
        }
       showWinner(userWin);
    }
    
};
choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);
});
});