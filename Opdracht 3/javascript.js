const header = document.querySelector('header');
const section = document.querySelector('section');


  let requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
  let request = new XMLHttpRequest();
  request.open('GET', requestURL); //Dit haalt de URL op door hem te requesten en met GET op te halen.

  request.responseType = 'json'; //Dit geeft het type bestand van de URL weer.
request.send(); //Dit verstuurt de request.

request.onload = function() { //Als de pagina wordt geladen speelt deze functie zich af.
    const  movies= request.response;
    movieList(movies);
} 

  function movieList(jsonObj) {
    
    const info = jsonObj; //Info staat gelijk aan een jsonObject.

    for (let i = 0; i < info.length; i++) { //Dit is een loop die door jsonObj heen loopt.

        //Variabelen aanmaken voor de html.
        const myArticle = document.createElement('article');
        const myH1 = document.createElement('h1');
        const myH2 = document.createElement('h2');
        const myH3 = document.createElement('h3');
        
        const myImage = document.createElement('img');
        
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myList = document.createElement('ul');

        //Informatie aan variabelen toevoegen.
        myH1.textContent = info[i].id;
        myH2.textContent = info[i].title;
        myH3.textContent = info[i].plot;
        myImage.src = info[i].cover;
        
        
        myPara2.textContent = 'score: ' + info[i].score;
        myPara3.textContent = 'actors:';
        
       
        //De variabel actors aanmaken en hieraan voeg ik de informatie eraan toe. Hierna wordt er door alle actors heen geloopt en dit in een list gezet.
        const actors = info[i].actors;
        for (let j = 0; j < actors.length; j++) {
            const listItem = document.createElement('li');
            listItem.textContent = actors[j].actor_name;
            myList.appendChild(listItem)
        }
        
        //De variabelen met informatie toevoegen.
        myArticle.appendChild(myH1);
        myArticle.appendChild(myH2);
        myArticle.appendChild(myH3);
    
        myArticle.appendChild(myImage);

        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);
        
        section.appendChild(myArticle);
    }


}