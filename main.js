function play() {

    
const arr = ["rock", "paper", "scissors"];
const random = Math.floor(Math.random() * arr.length);
const random1 = Math.floor(Math.random() * arr.length);

const user = arr[random];
const computer = arr[random1];
  
console.log("Computer choice: ", computer);
console.log("User choice: ", user); 
  
if(user == "rock" && computer == "rock") {
  console.log("Equal!");
} else if(user == "rock" && computer == "paper") {
  console.log("Computer wins!");
} else if(user == "rock" && computer == "scissors") {
  console.log("User wins!");
} else if(user == "paper" && computer == "rock") {
  console.log("User wins!");
} else if(user == "paper" && computer == "paper") {
  console.log("Equal!");
} else if(user == "paper" && computer == "scissors") {
  console.log("Computer wins!");
} else if(user == "scissors" && computer == "rock") {
  console.log("Computer wins!");
} else if(user == "scissors" && computer == "paper") {
  console.log("User wins!");
} else if(user == "scissors" && computer == "scissors") {
  console.log("Equal!");
}


}

const buttonInc = document.querySelector('.js-play');
buttonInc.addEventListener('click', play);

