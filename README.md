# Project Cordova 2021 - 2022

- **Name**: Luca Van Genechten
- **Class**: 2APPAI 01
- **Email**: <a href="mailto:r0849476@student.thomasmore.be">r0849476@student.thomasmore.be</a>
- **Student number**: r0849476
- **APK download URL**: [download!](ledenlijstchirovorselaar.sinners.be/assets/LedenlijstChiroVorselaar.apk)

![Link to your profile photo](resources/me.jpg)

## Short description of your app

Voor mijn applicatie in Cordova ga ik een mobile versie maken van de wodbook website die Crossfit Lividum in Herentals gebruikt. Het is de bedoeling dat gebruikers zich kunnen inloggen in de app met een gebruikersnaam en een wachtwoord. Deze worden opgeslagen in een databank. 

Na het inloggen krijgt de gebruiker een welkompagina waar hij verwelkomt wordt en informatie krijgt over aankomende evenementen.
In een volgende tab kunnen ze zich inschrijven voor sportsessies. Hierbij krijgt de gebruiker een overzicht via een kalender waarbij open slots staan waarvoor ze zich kunnen inschrijven. Indien de gebruiker op een tijdblok duwt om zich in te schrijven krijgen ze data te zien zoals de coach, het maximum aantal inschrijvingen en het huidig aantal ingeschreven sporters, alsook de tijdblok (bijvoorbeeld van 10u tot 11u).

In deze tab kan de gebruiker zelf ook een evenement aanmaken voor in de kalender, als de gebruiker daar de rechten voor heeft (bijvoorbeeld als coach).
In een derde tab krijgen ze hun huidige inschrijvingen te zien. Deze staan chronologisch gerangschikt en wanneer de gebruiker op een inschrijving duwt krijgt deze weer al de data voor die inschrijving te zien.

In een vierde en laatste tab kunnen de gebruikers hun gegevens aanpassen indien ze dit nodig vinden.

## Plugins used

- [cordova-plugin-whitelist](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-whitelist/)  
De whitelist plugin zorgt ervoor dat een gebruiker gelimiteerd wordt in welke URLs ze kunnen bereiken binnen een webview.

- [cordova-plugin-androidx](https://www.npmjs.com/package/cordova-plugin-androidx)
- [cordova-plugin-androidx-adapter](https://www.npmjs.com/package/cordova-plugin-androidx-adapter)
Deze plugins worden gebruikt om libraries in een Cordova/Phonegap project te enablen indien deze androidx gebruiken.

- [cordova-plugin-browsertab](https://github.com/google/cordova-plugin-browsertab)
- [cordova-plugin-inappbrowser](https://cordova.apache.org/docs/en/10.x/reference/cordova-plugin-inappbrowser/)
- [cordova-universal-links-plugin](https://www.npmjs.com/package/cordova-plugin-universal-links)
Deze plugins dienen voornamelijk voor het bouwen van de login voor Firebase die ingebouwd is. Het login element is een webview die door deze plugins ingeladen kan worden.

- [cordova-plugin-buildinfo](https://www.npmjs.com/package/cordova-plugin-buildinfo)
De buildinfo plugin zorgt er voor dat allerlei data over het device beschikbaar zijn vanaf dat de deviceready event wordt afgevuurd wordt.

- [cordova-plugin-compat](https://www.npmjs.com/package/cordova-plugin-compat)
De compat plugin zorgt ervoor dat backwards compatibility met vroegere versies van Cordova behouden wordt.

- [cordova-plugin-firestore](https://www.npmjs.com/package/cordova-plugin-firestore)
De firestore plugin is de plugin die het meeste gebruikt wordt in de applicatie. Het zorgt voor een realtime verbinding tussen de app en de cloud waar de data van de applicatie wordt bijgehouden.

- [cordova-plugin-vibration](https://www.npmjs.com/package/cordova-plugin-vibration)
Deze simpele plugin zorgt voor een vibratie die x aantal seconden kan duren of met een patroon.

