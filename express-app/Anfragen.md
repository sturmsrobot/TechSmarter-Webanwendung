## Benutzerregistrierung:
Methode: POST
URL: /auth/register
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
URL: /auth/login
Anfrage: http://localhost:5050/api/auth/login
### BeispielBody (funktioniert):
```
{
    "email": "horst@web.de",
    "password": "horst123"
}
```

## Hinzufügen von Benutzerpunkten:
Methode: POST
URL: /user/addPoints
Anfrage:  http://localhost:5050/user/addPoints
### BeispielBody(funktioniert):
```
{
    "username": "ChristianeKrise",
    "points": 50
}
```

## Subtrahieren von Benutzerpunkten:
Methode: POST
URL: /user/subtractPoints
Anfrage: http://localhost:5050/user/subtractPoints
### BeispielBody():
```
{
    "username": "horst",
    "points": 30
}
```

## Abrufen von Benutzerdaten:
Methode: GET
URL: /user
Anfrage: http://localhost:5050/api/user


## Aktualisieren von Benutzerdaten:
Methode: PUT
URL: /user/:id
Anfrage: http://localhost:5050/user/123
### BeispielBody():
```
{
    "username": "horst",
    "email": "neuerHorst@googlemail.com",
    "password": "neuerHorst123"
}
```

## Löschen von Benutzerdaten:
Methode: DELETE
URL: /users/:id
Anfrage:  http://localhost:5050/user/123
### BeispielBody():
```
{
    "username": "horst"
}
```

<!-- ## Geschützte API-Routen:
Methode: GET
URL: /api/protected
Anfrage: http://localhost:5050/api/protected -->


<!-- ## Hinzufügen von Punkten zu einem Benutzer (Gamification):
Methode: POST
URL: /gamification/addPoints
Anfrage: http://localhost:5050/gamification/addPoints
### BeispielBody():
```
{
"playerId": "12345",
"points": 50
}
```

## Entfernen von Punkten von einem Benutzer (Gamification):
Methode: POST
URL: /gamification/removePoints
Anfrage: http://localhost:5050/gamification/removePoints
### BeispielBody():
```
{
"playerId": "12345",
"points": 20
}
``` -->
