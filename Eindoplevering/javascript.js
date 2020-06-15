

var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
	//	console.log(this.responseText);
	}
});

xhr.open("GET", "https://omgvamp-hearthstone-v1.p.rapidapi.com/cardbacks");
xhr.setRequestHeader("x-rapidapi-host", "omgvamp-hearthstone-v1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "c59143bd5amshb3a51202173a9d1p19df1djsn399b91b02baa");

xhr.responseType = 'json'; 
xhr.send(data);

xhr.onload = function () {
	console.log(xhr.response)
	cards(xhr.response)
}

function cards (jsonObj) {
	for (let i = 0; i < 10; i++) {
		console.log(jsonObj[i])
	}
}