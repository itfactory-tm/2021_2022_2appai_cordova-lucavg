# Project Cordova 2021 - 2022

- **Name**: Luca Van Genechten
- **Class**: 2APPAI 01
- **Email**: <a href="mailto:r0849476@student.thomasmore.be">r0849476@student.thomasmore.be</a>
- **Student number**: r0849476
- **APK download URL**: [download!](ledenlijstchirovorselaar.sinners.be/assets/LedenlijstChiroVorselaar.apk)

![Link to your profile photo](resources/me.jpg)

## Short description of your app

Bij het opstarten van de applicatie wordt er uitleg over mezelf gegeven en het doel van de applicatie. Hier is geen interactie tussen de applicatie en de gebruiker.

Op de volgende pagina worden de leden van de gekozen afdeling getoond. Hier kan men met behulp van de checkboxes aanduiden welke leden aanwezig zijn en welke afwezig. Helemaal onderaan de pagina staat ook een teller die aantoont hoeveel leden er aanwezig zijn.

De derde pagina is enkel gevuld wanneer een gebruiker ingelogd is via Firebase. Deze tab toont alle leden van de geselecteerde afdeling inclusief de bijhorende adressen.

Op de laatste pagina worden alle instellingen voor de applicatie getoond. Men kan kiezen van welke afdeling ze de lijsten willen bekijken, alsook of ze de adreslijsten willen opvragen per lid. Hier kan men zich ook inloggen als de gebruiker is aangeduid als administratief verantwoordelijke van Chiro Vorselaar. Dit is per afdeling 1 leiding en deze logingegevens worden door mij en de volwassen begeleiding van Chiro Vorselaar aangeboden. Indien men zich inlogt als administratief verantwoordelijke dan krijgt men toegang tot extra informatie per lid, zoals bijvoorbeeld de adressen.

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

