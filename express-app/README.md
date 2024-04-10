# Express-App Dokumentation - Sonntag, 7. April 2024

* Node.js und npm installiert: Node.js und npm wurden auf dem System installiert, um die Entwicklung von Node.js-Anwendungen zu ermöglichen.
* npm-Projekt initialisiert: Das npm-Projekt wurde mit npm init -y initialisiert, wodurch die Standardkonfigurationen verwendet wurden.

## Nach der Initialisierung des Projekts haben wir die erforderlichen Pakete installiert.
* Express installiert: Das Express-Paket wurde mit dem Befehl npm install express installiert, um das Framework für die Express-Anwendung bereitzustellen.

## Die Express-Anwendung wurde eingerichtet, um als Backend für die CRUD-Funktionalität zu dienen.
* server.js erstellt: Die server.js-Datei wurde erstellt, um die Express-Anwendung zu initialisieren und den Server zu starten.
* Express-App konfiguriert: Die Express-App wurde konfiguriert, um auf Port 3000 zu lauschen und die Standardroute "/" zu definieren.
* Routing eingerichtet: Ein Basis-Routing für die API wurde in der routes.js-Datei definiert, um die CRUD-Endpunkte zu verwalten.

## Die CRUD-Funktionalität wurde implementiert, um Benutzerdaten abzurufen, zu erstellen, zu aktualisieren und zu löschen.
* Routen definiert: Die Routen für GET, POST, PUT und DELETE wurden in der routes.js-Datei definiert, um die entsprechenden CRUD-Operationen durchzuführen.
* Handlerfunktionen implementiert: Handlerfunktionen wurden für jeden Endpunkt erstellt, um auf die Anfragen zu reagieren und die Datenbankoperationen durchzuführen.
* CRUD-Abfragen getestet: Die Implementierung wurde getestet, um sicherzustellen, dass alle CRUD-Abfragen ordnungsgemäß funktionieren.



# Express-App Dokumentation - Montag, 8. April 2024

Heute haben wir unsere Express-App weiterentwickelt und neue Funktionalitäten hinzugefügt, um die Benutzererfahrung zu verbessern und die Leistung der Anwendung zu optimieren. Hier ist eine Zusammenfassung dessen, was wir implementiert haben:

## 1. Middleware hinzugefügt:

Wir haben Middleware-Funktionen eingeführt, um die Anfragen zu verarbeiten, bevor sie an die Endpunkte weitergeleitet werden. Dies umfasst Logging-Middleware, um Informationen über eingehende Anfragen zu protokollieren, und Authentifizierungsmiddleware, um den Zugriff auf bestimmte Routen zu kontrollieren.

## 2. Datenbankverbindung und Modelle eingerichtet:

Wir haben die Datenbankverbindung eingerichtet und Modelle für unsere Datenbanktabellen definiert. Dies ermöglicht es uns, auf einfache Weise auf die Datenbank zuzugreifen und Daten abzurufen, zu erstellen, zu aktualisieren oder zu löschen.

## 3. Abhängigkeiten installiert und initialisiert:

Wir haben alle erforderlichen Abhängigkeiten installiert und initialisiert, einschließlich Express, Sequelize (oder ein anderes ORM), Logging-Module wie Winston und Authentifizierungs-Plug-ins.

## 4. Logging-Mechanismen hinzugefügt:

Wir haben Logging-Mechanismen implementiert, um Serveraktivitäten und Fehler zu protokollieren. Dies ermöglicht es uns, Probleme schnell zu identifizieren und zu beheben und die Leistung unserer Anwendung zu überwachen.

## 5. Fehlerbehandlung implementiert:

Wir haben eine angemessene Fehlerbehandlung implementiert, um sicherzustellen, dass Fehlermeldungen an Client-Anfragen gesendet werden oder protokolliert werden, und um sicherzustellen, dass die Anwendung auch bei Fehlern robust bleibt.

### Durch diese Implementierungen sind wir in der Lage, eine robuste und leistungsstarke Express-Anwendung zu erstellen, die den Anforderungen unserer Benutzer gerecht wird und gleichzeitig eine reibungslose Benutzererfahrung bietet.

## 6. Kleine Änderungen:
1. Erstellung der `index.js`-Datei im models-Verzeichnis.
2. Verwendung von Modulen wie `fs`, `path`, und `Sequelize` für die Datenbankverbindung und Modelle.
3. Einrichtung der Umgebung mit der Verwendung der `NODE_ENV`-Variable.
4. Laden der Datenbankkonfiguration aus der `config.json`-Datei, abhängig von der Umgebung.
5. Initialisierung eines leeren Objekts `db` zur Speicherung der geladenen Modelle.
6. Verwendung der `basename`-Variable zur Extraktion des Dateinamens.
7. Zusammenführung der `Users.js` und `user.js` zu einer einzigen Datei.
8. Installation des Sequelize-Clients für die Interaktion mit der Datenbank.
9. Erstellung einer `sequelize`-Instanz zur Herstellung der Verbindung zur Datenbank.
10. Body-Parser als Abhängigkeit, um Anfragekörper zu analysieren und zu verarbeiten.
11. Passport als Abhängigkeit für die Implementierung der Authentifizierung und Autorisierung.
12. Express-Validator als Abhängigkeit für die Validierung von Benutzereingaben.
13. Helmet als Abhängigkeit für die Verbesserung der Sicherheit durch das Setzen von HTTP-Headern.
14. Cors als Abhängikeit, um Cross-Origin-Ressourcenfreigabe zu ermöglichen.
15. Ich habe die Validierungsregeln für den POST-Endpunkt hinzugefügt, um sicherzustellen, dass die Benutzereingaben den erwarteten Formaten entsprechen.
16. Ich habe die Validierungsergebnisse überprüft und bei Fehlern eine entsprechende Fehlerantwort zurückgegeben.


# Express-App Dokumentation - Dienstag, 9. April 2024

## Zusammenfassung der heutigen Aktivitäten:

- Implementierung der Datenbankanbindung in der Express-App.
- Definition von Modellen für Datenbanktabellen im Backend.
- Hinzufügen von Validierungsregeln für POST- und PUT-Anforderungen im Backend.
- Einrichtung einer neuen Route für die Main_Page im Backend.
- Implementierung der Main_Page-Route, um Daten zurückzugeben, basierend auf einem Modell im Backend.
- Aktualisierung der Frontend-Route, um Daten von der aktualisierten Main_Page-Route abzurufen.
- Refaktorisierung und Verbesserung des Codes in verschiedenen Teilen der Anwendung.

## Zusätzlich zu dieser Aktivität wurden einige Kleinigkeiten verbessert:

- Implementierung weiterer Routen und Endpunkte, um die Funktionalität der Anwendung zu erweitern.
- Hinzufügen von Middleware für Sicherheit und Authentifizierung.
- Dokumentation der durchgeführten Änderungen und Aktualisierung der Projektdokumentation.


# Express-App Dokumentation - Mittwoch, 10. April 2024

## Was ist heute passiert?
- Recherche zu JWT in Express für die Implementierung von Authentifizierung.
- Installation und Integration von JWT in unsere Express-Anwendung.
- Überarbeitung und Strukturierung der server.js-Datei, um JWT-Authentifizierung zu implementieren.
- Installation von Jest und Faker zur Durchführung von Unit-Tests.
- Konfiguration von Jest für die Testausführung.
- Schreiben eines Testfalls für die Authentifizierung in der Datei authentication.test.js.
- Durchführung der Testfallausführung, die jedoch zu Fehlern führte.
- Installation von Supertest zur Integration von Jest für das Testen von Express-Endpunkten.
- Auftreten eines Problems, bei dem das Sequelize-Objekt nicht korrekt an die init-Methode in unseren Modelldateien übergeben wurde.

## Welche Probleme sind aufgetreten/Lösungsansätze?
Das Hauptproblem, das heute aufgetreten ist, war das Fehlen der korrekten Übertragung des Sequelize-Objekts an die init-Methode in unseren Modelldateien. Die Lösung bestand darin, sicherzustellen, dass das Sequelize-Objekt ordnungsgemäß an die init-Methode übergeben wird.

## Womit beschäftige ich mich morgen?
- Klärung des Problems mit der Testfallausführung und Behebung der Fehler.
- Recherche zum CSRF-Schutz für die Passwortsicherheit und Implementierung entsprechender Maßnahmen in der Express-Anwendung.
- Mögliche Verbesserungen oder Erweiterungen der Authentifizierungsfunktionen in der Anwendung.
- Weiterführung der Unit-Tests für verschiedene Funktionen und Endpunkte der Anwendung.

