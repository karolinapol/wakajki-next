Aplikacja wakajki.pl służy do rezerwacji i planowania wycieczek.

## Wymagania

```
node.js
```

## Uruchamianie

1.Instalacja zależności:

```
npm i --force
```

2.Inicjalizacja bazy danych:

```
node lib/initdb.ts
```

3.Uruchamianie aplikacji:

```
npm run dev
```

Otwórz w przeglądarce [http://localhost:3000](http://localhost:3000) aby korzystać z aplikacji.

Aplikacja wymaga rejestracji do korzystania z większości modułów, więc najpierw przejdź na [http://localhost:3000/register](http://localhost:3000/register) aby się zarejestrować.

Następnie zaloguj się na [http://localhost:3000/login](http://localhost:3000/login).
