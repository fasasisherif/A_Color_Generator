let ham = document.querySelector(".hamburger")
let count = 0;
let move = document.querySelector(".navLinks").querySelectorAll("div")
let info = document.querySelector(".info")
let topic = document.querySelector(".topic")
let button = document.querySelector("button")

const openNav = () => {

let navigation = document.querySelector(".navigation")
let navLinks = document.querySelector(".navLinks")
let open = document.querySelector(".openWide")
count++


if(count%2 == 1){
		ham.innerHTML = "X"
		open.style.animation ="animateNavbar .2s ease-in forwards"
		
		navLinks.style.top = "90px"
		navLinks.style.left = "50vw"
		navLinks.style.height = "110px"
		navLinks.style.width = "150px"
	
		move[0].style.animation ="move1 .4s ease .2s forwards"
		move[1].style.animation ="move1 .4s ease .3s forwards"
		move[2].style.animation ="move1 .4s ease .4s forwards"
		move[3].style.animation ="move1 .4s ease .5s forwards"
		move[0].style.color ="cyan"
   }

if(count%2 == 0){
		ham.innerHTML = "&#9776"
		open.style.animation ="animateNavbarClose .2s ease-in forwards"
		navLinks.style.height = "0px"
		navLinks.style.width = "0px"
		
		move[0].style.animation ="move2 .4s ease .2s forwards"
		move[1].style.animation ="move2 .4s ease .3s forwards"
		move[2].style.animation ="move2 .4s ease .4s forwards"
		move[3].style.animation ="move2 .4s ease .5s forwards"
		}

	}
ham.addEventListener("click",openNav)


const changeInfo1 = () => {
		let detail0 = "Xperience"
		let detail1 = "A lot was learnt while coding this. It took me three days to reach this stage. I remember visiting stackoverflow and other sites many times. The inspiration comes from a code I saw in Sololearn"
		topic.innerText = detail0
		info.innerText = detail1
		}
move[0].addEventListener("click",changeInfo1)

const changeInfo2 = () => {
		let detail0 = "About Me"
		let detail1 = "I'm a Frontend Developer. Still learning, both school-related and coding. I hope to learn so much from everyone and especially from our awesome lady boss who created a community of coders like this."
		topic.innerText = detail0
		info.innerText = detail1
		}
move[1].addEventListener("click",changeInfo2)

const changeInfo3 = () => {
		let detail0 = "What I Do"
		let detail1 = "I code from time to time depending on my mood and what I'm coding. So far I've loved coding since I started except that one in a while I get tired of it. If I'm not coding, then I'm watching a movie or reading a novel"
		topic.innerText = detail0
		info.innerText = detail1
		}
move[2].addEventListener("click",changeInfo3)

const changeInfo4 = () => {
		let detail0 = "Support"
		let detail1 = "If u want to support, u can tell me to add or subtract from my code to improve. Thanks."
		topic.innerText = detail0
		info.innerText = detail1
		}
move[3].addEventListener("click",changeInfo4)

const GoToNextPage = () =>{
		window.location.href ="Color_Generator.html"
		}
button.addEventListener("click",GoToNextPage)

