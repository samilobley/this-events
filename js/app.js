//Secret Menu Challenge
/*Add event listeners to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var whichRest = document.getElementsByClassName("name");

console.log(whichRest);

for(var i = 0; i <whichRest.length; i++) {
	console.log(whichRest[i]);

	whichRest[i].addEventListener("click", showMenu);

}

function showMenu(){
	var getMenu = this.querySelectorAll(".menu")[0];
	console.log(getMenu);

	if(getMenu.style.display === "none"){
		getMenu.style.display = "initial";
	}else{
		getMenu.style.display = "none";
		}
	}

