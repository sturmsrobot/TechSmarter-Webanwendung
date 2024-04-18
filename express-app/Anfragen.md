## Benutzerregistrierung:
Methode: POST
URL: /register
Anfrage: http://localhost:5050/api/auth/register
### BeispielBody (funktioniert):
```
{
    "username": "horst",
    "email": "horsit@web.de",
    "password": "horst123"
}
```

## Benutzeranmeldung:
Methode: POST
URL: /login

## Hinzufügen von Benutzerpunkten:
Methode: POST
URL: /api/addPoints

## Subtrahieren von Benutzerpunkten:
Methode: POST
URL: /api/subtractPoints

## Abrufen von Benutzerdaten:
Methode: GET
URL: /users

## Aktualisieren von Benutzerdaten:
Methode: PUT
URL: /users/:id

## Löschen von Benutzerdaten:
Methode: DELETE
URL: /users/:id

## Geschützte API-Routen:
Methode: GET
URL: /api/protected

## Hinzufügen von Punkten zu einem Benutzer (Gamification):
Methode: POST
URL: /gamification/addPoints

## Entfernen von Punkten von einem Benutzer (Gamification):
Methode: POST
URL: /gamification/removePoints