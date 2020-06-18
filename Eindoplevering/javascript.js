var allCardbacks = null;
var columns = ['name','imgAnimated','description','howToGet',];
// De waardes van de json die je terug wilt laten komen in de tabel

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if	 (this.readyState === this.DONE) {
		cards(this.response);
		allCardbacks = this.response;
		// Je voegt een event listener toe aan de api call en kijkt of de state aangepast wordt. Zodra de state naar Done gezet wordt dan is de API klaar en kan je de cards functie runnen

	}
});

xhr.open("GET", "https://omgvamp-hearthstone-v1.p.rapidapi.com/cardbacks");
xhr.setRequestHeader("x-rapidapi-host", "omgvamp-hearthstone-v1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "c59143bd5amshb3a51202173a9d1p19df1djsn399b91b02baa");

xhr.responseType = 'json'; 
xhr.send();

xhr.onload = function () {
	//de functie wordt onload geladen
}

document.getElementById('search').addEventListener("input",function(){
	let input = this.value;
	// als er enige input is voert de functie uit.


	if (this.value == ""){
		cards(allCardbacks);
		// als de input leeg is dan worden alle cardbacks geshowt
	}


	else {
		var filteredCardbacks = allCardbacks.filter(function(cardback){
			
			let cardbackName = cardback['name'];
		
			return cardbackName.toLowerCase().includes(input.toLowerCase());
			//loopt door alle values heen, als de name terug komt in de input is het true en laat hij hem erin. False wordt hij eruit gefilterd.
		})
		cards(filteredCardbacks);
	}
})

function cards (cardbacks) {
	var table = document.getElementById('cardbackTable');
	table.innerHTML = "";
	// Maakt een tabel aan voor de data.
	

	for(var i = 0; i < 50;i++){
		// Loop door de data heen. Max 50 cardback laten zien.
	

		var tr = table.insertRow(-1);
			// Creer 1 rij in de volgende lege positie.


		for(var j = 0;j<columns.length;j++){
				// Loop door de kolomnamen heen.
		

			let column = columns[j];
				// Definieer de columnaam
		

			var tabCell = tr.insertCell(-1);
				// Creer een extra column
		

			if(column == 'imgAnimated'){
					// Kijkt of de column een imagAnimated is.


				tabCell.innerHTML = "<img src='"+ cardbacks[i][column] + "' ></img>";
					// Defineer de innerHTML van de tabelcolumn naar de Image.


			}else if(cardbacks[i][column] == undefined){
				tabCell.innerHTML = "Default";
				// Anders laat gewoon de text Default zien.

			}else{
				
				tabCell.innerHTML = cardbacks[i][column];
				//Haalt de values eruit

			}
		}
	}

	for (let i = 0; i < 10; i++) {
		console.log(cardbacks[i])
	}
}


 