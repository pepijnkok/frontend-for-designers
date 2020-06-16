

// Defineer de kolomnamen.
var allCardbacks = null;
var columns = ['name','imgAnimated','description','howToGet',];
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if	 (this.readyState === this.DONE) {
		cards(this.response);
		allCardbacks = this.response;
	//	console.log(this.responseText);
	}
});

xhr.open("GET", "https://omgvamp-hearthstone-v1.p.rapidapi.com/cardbacks");
xhr.setRequestHeader("x-rapidapi-host", "omgvamp-hearthstone-v1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "c59143bd5amshb3a51202173a9d1p19df1djsn399b91b02baa");

xhr.responseType = 'json'; 
xhr.send();

xhr.onload = function () {
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
			console.log(cardback['name']);
			let cardbackName = cardback['name'];
			console.log(input);
			return cardbackName.toLowerCase().includes(input.toLowerCase());
			//loopt door alle values heen, als de name terug komt in de input is het true is laat hem erin en false wordt hij eruit gefilterd
		})
		cards(filteredCardbacks);
	}
})

function cards (cardbacks) {
	var table = document.getElementById('cardbackTable');
	table.innerHTML = "";
	// Maakt een tabel aan voor de data.
	// Loop door de data heen. Max 10 cardback laten zien.


	for(var i = 0; i < 50;i++){
		// Creer 1 rij in de volgende lege positie.


		var tr = table.insertRow(-1);
		// Loop door de kolomnamen heen.


		for(var j = 0;j<columns.length;j++){
			// Definieer de columnaam


			let column = columns[j];
			// Creer een extra column


			var tabCell = tr.insertCell(-1);
			// Kijkt of de column een image is.


			if(column == 'imgAnimated'){
				// Defineer de innerHTML van de tabelcolumn naar de Image.


				tabCell.innerHTML = "<img src='"+ cardbacks[i][column] + "' ></img>";
			}else if(cardbacks[i][column] == undefined){
				tabCell.innerHTML = "Default";
			}else{
				// Anders laat gewoon text zien.


				tabCell.innerHTML = cardbacks[i][column];
				//Haalt de values eruit

			}
		}
	}

	for (let i = 0; i < 10; i++) {
		console.log(cardbacks[i])
	}
}


 