let button = document.querySelector("button")
let count = 0;

const expandBackColor = () => {
	 count++
		let celebration = document.querySelector(".celebration")
		let expandRect1 = document.querySelector(".expandRect1")
		let hexValues = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"]
		let hex = "#";
		
		
expandRect1.style.animation ="animateExpansion .2s ease-in forwards"


for(i=0; i<6; i++){
  		hex = hex + hexValues[Math.floor(Math.random()*15)]
  		}
expandRect1.style.backgroundColor = hex
celebration.style.backgroundColor = hex

if(count > 0){
		celebration.style.animation ="appear 1s ease-in forwards"

		}
	}

button.addEventListener("click",expandBackColor)

