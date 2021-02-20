# Weather App

## Welkom op mijn Weather-App repository!

\
Deze pagina heb ik gemaakt om wat vanilla Javascript en het aanroepen van een externe API te laten zien. \
Voor de vormgeving heb ik Bootswatch (Bootstrap) gebruikt. https://bootswatch.com/ \
De externe API die ik gebruikt heb is https://openweathermap.org/current \
In dit project ben ik bezig geweest met o.a. constructors, paint, localStorage, async, await en fetch.



### Website
**Weather App:**\
De pagina bestaat uit een container met daarin de data en een modal die geopend wordt op het moment dat er op de 'Andere locatie' knop geklikt wordt. \
In de container komt de locatie, het land, de temperatuur en een omschrijving weergegeven. Daaronder komen, in een lijst, de details te staan. \
In de modal kan gekozen worden voor een andere locatie. 



### Code
Om de applicatie te runnen is een API key nodig. Deze is op te vragen via https://openweathermap.org/price \
Mijn API key heb ik in een config.js file gezet. Deze file heb ik vervolgens in een .gitignore gezet. \
Alle styling wordt met Javascript en Bootswatch gevormd daardoor is er geen CSS file aanwezig. \
De keuze voor de units (metric) en taal (nl) heb ik meegegeven in de request URL van de weather API. \
De API geeft de windrichting terug in het aantal graden. Ik heb zelf een functie, windDrectionCode() geschreven die het aantal graden omzet naar een windriching. \
De omschrijving van het weer kreeg ik terug zonder hoofdletter. Om dit op te lossen heb ik een functie capatalize() geschreven. \
Het aantal graden en de windsnelheid geeft de API in 2 decimalen terug. Met de functie roundToOneDecimal() heb ik het getal afgerond en teruggebracht naar 1 decimaal.


Het is statische code. Er hoeft niets gerund te worden.
