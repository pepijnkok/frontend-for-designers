# Opdracht 3 - Een interactie uitwerken met externe data

Voor deze opdracht ga ik een functionaliteit ontwerpen met externe data. De data is JSON die met een REST API van een externe bron wordt ingeladen met Javascript. Als de data geladen is moeten gebruikers je ontwerp op verschillende manieren kunnen bedienen. Verschillende states zijn vormgeven en worden op het juiste moment getoond.

Ik gebruik de volgende API: https://rapidapi.com/omgvamp/api/hearthstone
Dit is een API van het videospel 'Hearthstone'. Dit is een digitaal kaartspel voor Windows, Android, Mac, en IOS.
Van deze API heb ik de code snippet van Cardbacks gekopieerd en omgezet in JSON data zodat ik hiermee aan de slag kon gaan en een leuke feature van de beschikbare data kon maken.

Dit is het eindresultaat geworden:
https://pepijnkok.github.io/frontend-for-designers/Eindoplevering/


## Idee
Ik heb op mijn pagina alle cardbacks die er in hearthstone bestaan ingeladen met de JSON data. Omdat dit er echt rond de 150 zijn heb ik voor nu de max gezet tot 50. Dit zijn er alsnog erg veel en daarom vond ik het erg handig om de gebruiker de feature te kunnen bedienen met een search balk. Hiermee filter je de cardbacks doordat je de naam van jouw gewenste cardback invult.
Als je iets invult krijg je gelijk feedback te zien en je hoeft dus niet op enter te klikken om te gaan zoeken.
Als je op enter klikt refresht de pagina en kan je opzoek gaan naar een andere cardback.

## Begrippen
- Keep users in control:
Ik heb gebruik gemaakt van een zoekbalk zodat de users niet overwelmt worden door een grote hoeveelheid cardbacks, maar hier dus doorheen kunnen zoeken en filteren door middel van een zoekbalk.

- Provide a natural next step
Als je tekst in de zoekbalk toevoegt krijg je gelijk alle cardbacks te zien die de door jouw ingevoerde tekst bevatten.
Hierdoor laat ik ze gelijk de volgende stap zien en ook dat de interactie goed werkt en gelijk feedback teruggeeft.

- Appearance follows behavior
De zoekbalk lijkt op een zoekbalk en gedraagt zich dus ook als een zoekbalk. Er is niks aparts hieraan qua design en dus kan de gebruiker gelijk zien wat hij of zij kan doen doordat iedereen bekend is met zoekbalken.

- Strong visual hierarchies work best
Ik heb bij de zoekbalk een zoek icoon toegevoegd zodat de gebruiker weet wat deze balk precies doet.
Ik heb ook de placeholder tekst: 'Search for cardbacks' toegevoegd zodat de gebruiker weet dat hij of zij kan zoeken naar cardbacks.
Ook als je eroverheen hovert verandert je muis van een pijltje naar een balkje zodat je weet dat je hierin kan typen.

## Code
De code wordt uitgelegd door middel van comments bij de stukjes code.

## Installeren
Clone de repository in de terminal

```
git clone https://github.com/pepijnkok/frontend-for-designers
```

## License

[MIT License](https://github.com/pepijnkok/frontend-for-designers/blob/master/LICENSE) © [Pepijn Kok](https://github.com/pepijnkok)