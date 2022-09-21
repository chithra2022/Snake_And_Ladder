let dice = document.getElementById('dice');
let current = 0;
let next = 0;

function rollDice() {
    	let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    	dice.dataset.side = result;
    	dice.classList.toggle("reRoll");
	try{
		if(result == 1){
		}
		current += result;
		if(current > 100){
			current = current - result;
		} 	
		switch (current){
      			case 4: 
				current = 25;
        			break;
			case 13:
				current = 46;
        			break;
			case 42:
				current = 63;
        			break;
			case 50:
				current = 69;
        			break;
			case 62:
				current = 81;
        			break;
			case 74:
				current = 92;
        			break;
			case 27: 
				current = 5;
        			break;
			case 40:
				current = 3;
        			break;
			case 43:
				current = 18;
        			break;
			case 52:
				current = 31;
        			break;
			case 66:
				current = 45;
        			break;
			case 76:
				current = 58;
        			break;
			case 89:
				current = 53;
        			break;
			case 99:
				current = 41;
        			break;
			case 100:
        			break;
		}	
		
		const parent = document.getElementById(""+current+"");
		const child = document.getElementById('movedot');

		console.log("result",result);
		console.log("latest",current);

		parent.appendChild(child);
 	}
	catch(error){
		console.log(error);
	}
	
}
dice.addEventListener("click", rollDice);
