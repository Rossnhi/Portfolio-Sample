let menuOpen = false;
let menu = document.getElementById("menu");
function toggleMenu() {
	let x = window.matchMedia("(max-width: 440px)");
	if(x.matches) {
		let height;
		if(menuOpen) {
			height= "0px";
		}
		else {
			height="175px";
		}
		menu.style.height=height;
		menuOpen = !menuOpen;
		}
	}