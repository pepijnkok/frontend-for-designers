const header = document.querySelector('header');
const section = document.querySelector('section');


  let requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
  let request = new XMLHttpRequest();
  request.open('GET', requestURL); //Dit haalt de URL op door hem te requesten en met GET op te halen.

  request.responseType = 'json'; //Dit geeft het type bestand van de URL weer.
request.send(); //Dit verstuurt de request.

request.onload = function() { //Als de pagina wordt geladen speelt deze functie zich af.
    const  test= request.response;
    movieList(test);
} 

  function movieList(jsonObj) {
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);
  
    const myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);
  }

  function movieList(jsonObj) {
    
    const info = jsonObj;//aangeven dat info == jsonObj

    for (let i = 0; i < info.length; i++) { //loop door alle onderdelen van de jsonObj

        //elementen aanmaken 
        const myArticle = document.createElement('article');
        const myH1 = document.createElement('h1');
        const myH2 = document.createElement('h2');
        const myH3 = document.createElement('h3');
        
        const myImage = document.createElement('img');
        
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myList = document.createElement('ul');

        //info aan elementen toewijzen 
        myH1.textContent = info[i].id;
        myH2.textContent = info[i].title;
        myH3.textContent = info[i].plot;
        myImage.src = info[i].cover;
        
        
        myPara2.textContent = 'score: ' + info[i].score;
        myPara3.textContent = 'actors:';
        
       
        //actors element maken --> info toewijzen --> loop door alle actors heen
        const actors = info[i].actors;
        for (let j = 0; j < actors.length; j++) {
            const listItem = document.createElement('li');
            listItem.textContent = actors[j].actor_name;
            // listItem.textContent = actors[j].actor_name + actors[j].url_photo;
            myList.appendChild(listItem);
            // profielImage.src = actors[i].url_photo;
            // myList.appendChild(profielImage);
        }
        
        //toevoegen van de elementen + info
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