let dice = document.getElementById('dice');
let current=0;
let next=0;
function rollDice() {
    	let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    	dice.dataset.side = result;
	if(result==1){
	current += result;
	}
    	dice.classList.toggle("reRoll");
	
 	const parent = document.getElementById(""+current+"");
	const child = document.getElementById('movedot');
	
	console.log("result",result);
	console.log("latest",current);
	parent.appendChild(child);
	startgame();
}
dice.addEventListener("click", rollDice);






function startgame(){
current+=result;
	
	
	if(current==4){
		current=25;
	}
	else if(current==13){
		current=46;
	}
	else if(current==42){
		current=63;
	}
	else if(current==50){
		current=69;
	}
	else if(current==62){
		current=81;
	}
	else if(current==74){
		current=92;
	}




	/*else if(next==27){
		next=55;
	}
	else if(next==40){
		next=3;
	}
	else if(next==43){
		next=18;
	}
	else if(next==52){
		next=31;
	}
	else if(next==66){
		next=45;
	}
	else if(next==76){
		next=58;
	}
	else if(next==89){
		next=53;
	}
	else if(next==99){
		next=41;
	}*/
	const parent = document.getElementById(""+current+"");
	const child = document.getElementById('movedot');
	
	console.log("result",result);
	console.log("latest",current);
	parent.appendChild(child);
}





 






