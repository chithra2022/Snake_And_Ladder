let dice = document.getElementById('dice');
let current_player_one = 0;
let current_player_two = 0;
let start_player_two;
let start_player_one;
let click=0;
let player_one_turn = false;
let player_two_turn = false;
var element_one = document.getElementById("playerOne");
element_one.style.display = "none";
var element_two = document.getElementById("playerTwo");
element_two.style.display = "none";
var player_one_active = document.getElementById("turn_of_one");
var player_two_active = document.getElementById("turn_of_two");

function Click_Dice() {
	click = click + 1;
	if(click % 2 == 1){
		player_one_turn = true;
		first_player(player_one_turn);
		player_one_active.style.color = "white";
		player_two_active.style.color = "#ffde03";
	}
	else{
		player_two_turn = true;
		second_player(player_two_turn);
		player_one_active.style.color = "#ffde03";
		player_two_active.style.color = "white";
	}
}
function first_player(player_one_turn){
	let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    	dice.dataset.side = result;
    	dice.classList.toggle("reRoll");
    	if(result == 1){
		start_player_one = 1;	
	}
	try{
		if(start_player_one == 1){
			current_player_one += result;
			element_one.style.display = "block";
	
			switch (current_player_one){
      				case 4: 
					current_player_one = 25;
        				break;
				case 13:
					current_player_one = 46;
        				break;
				case 33:
					current_player_one = 49;
        				break;
				case 42:
					current_player_one = 63;
        				break;
				case 50:
					current_player_one = 69;
        				break;
				case 62:
					current_player_one = 81;
        				break;
				case 74:
					current_player_one = 92;
        				break;
				case 27: 
					current_player_one = 5;
        				break;
				case 40:
					current_player_one = 3;
        				break;
				case 43:
					current_player_one = 18;
        				break;
				case 54:
					current_player_one = 31;
        				break;
				case 66:
					current_player_one = 45;
        				break;
				case 76:
					current_player_one = 58;
        				break;
				case 89:
					current_player_one = 53;
        				break;
				case 99:
					current_player_one = 41;
        				break;
				case 100:
					alert("Congratulation!!  Player One Wins!!");
			}	
			if(current_player_one > 100){
				current_player_one = current_player_one - result;
			}
			const parent = document.getElementById(""+current_player_one+"");
			const child = document.getElementById('playerOne');
			console.log("Player One Turn");
			console.log("result",result);
			console.log("latest",current_player_one);
			parent.appendChild(child);
 		}	
	}
	catch(error){
		console.log(error);
	}
}
function second_player(player_two_turn){
    	let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    	dice.dataset.side = result;
    	dice.classList.toggle("reRoll");
	if(result == 1){
		start_player_two = 1;	
	}
	try{
		if(start_player_two == 1){
			current_player_two += result;
			element_two.style.display = "block";
	
			switch (current_player_two){
      				case 4: 
					current_player_two = 25;
        				break;
				case 13:
					current_player_two = 46;
        				break;
				case 33:
					current_player_two = 49;
        				break;
				case 42:
					current_player_two = 63;
        				break;
				case 50:
					current_player_two = 69;
        				break;
				case 62:
					current_player_two = 81;
        				break;
				case 74:
					current_player_two = 92;
        				break;
				case 27: 
					current_player_two = 5;
        				break;
				case 40:
					current_player_two = 3;
        				break;
				case 43:
					current_player_two = 18;
        				break;
				case 54:
					current_player_two = 31;
        				break;
				case 66:
					current_player_two = 45;
        				break;
				case 76:
					current_player_two = 58;
        				break;
				case 89:
					current_player_two = 53;
        				break;
				case 99:
					current_player_two = 41;
        				break;
				case 100:
					alert("Congratulation!!  Player Two Wins!!");
			}	
			if(current_player_two > 100){
				current_player_two = current_player_two - result;
			}
			const parent = document.getElementById(""+current_player_two+"");
			const child = document.getElementById('playerTwo');
			console.log("Player Two Turn");
			console.log("result",result);
			console.log("latest",current_player_two);
			parent.appendChild(child);
 		}	
	}
	catch(error){
		console.log(error);
	}
}
dice.addEventListener("click", Click_Dice);