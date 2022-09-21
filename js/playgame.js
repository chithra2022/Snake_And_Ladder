let dice = document.getElementById('dice');
let current = 0;
let start;

var element = document.getElementById("movedot");
element.style.display = "none";

function Click_Dice() {
    	let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    	dice.dataset.side = result;
    	dice.classList.toggle("reRoll");

	if(result == 1){
		start = 1;	
	}
	try{
		if(start==1){
			current += result;
			element.style.display = "block";
	
			switch (current){
      				case 4: 
					current = 25;
        				break;
				case 13:
					current = 46;
        				break;
				case 33:
					current = 49;
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
				case 54:
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
			if(current > 100){
				current = current - result;
			}
		
			const parent = document.getElementById(""+current+"");
			const child = document.getElementById('movedot');
			console.log("result",result);
			console.log("latest",current);
			parent.appendChild(child);
 		}	
	}
	catch(error){
		console.log(error);
	}
}
dice.addEventListener("click", Click_Dice);
