---
created: 2024-04-01 19:40
last modified: 2024-04-01 19:41
tags:
  - DBS
  - Übungsblatt
fach: "[[Uni2/Semester/3.Semester/DBS/DBS]]"
---

# Aufgabe 9-1: **Beziehungen**

*Geben Sie für jeden der folgenden Beziehungstypen mindestens ein Beispiel an:*

### a) 1:1

Jeder deutsche Staatsbürger wird durch eine einzigartige Personalausweisnummer identifiziert, und jeder Personalausweisnummer ist genau ein Bürger zugeordnet.

- Student besitzt Matrikelnummer
- Nummernschild gehört zu Fahrzeugnummer

### b) 1:n

Jeder Mensch hat eine Mutter, aber jede Mutter kann mehrere Kinder haben

- In einer Abteilung sind mehrere Mitarbeiter angestellt
- Person ist Halter von mehreren Autos
### c) m:n

Ein Auto kann von mehreren Personen genutzt werden, mehrere personen können aber auch mehrere Autos benuzten

- Kunde kauft Produkt (mehrere Kunden können mehrere Produkte kaufen)
- Lieferant liefert Artikel

### d) m:n:k, D. h. eine mehrstellige Beziehung zwischen drei Entity-Sets

Mehrere Firmen können zum Mittagessen zu mehreren verschiedenen Restaurants gehen welchewiederum von verschiedenen Lieferanten ihre Lebensmittel bestellen

- Lieferant liefert Artikel an Kunde
- Person besucht Konzert in Stadt
- Krankheit besitzt Symptom und wird behandelt mit Medikament
### e) 1:n Rekursiv, d. h. eine 1:n-Beziehung eines Entity-Sets zu sich selbs

- Mitarbeiter ist Chef von Mitarbeiter
- Person ist Mutter von Person
### f) m:n Rekursiv

- Person ist Nachkomme von Person
- Vorlesung ist Voraussetzung für Vorlesung
- Person ist befreundet mit Perso


--- 

# Aufgabe 9-2: **Ableitung eines ER-Diagramms**

Gegeben sei die folgende relationale **Geschäftsdatenbank** einer Kaufhauskette:

- **Angestellter** (`Nummer`, `Name`, `Gehalt`, `Abteilung`, `Geburtsjahr`, `Einstellungsdatum`)
- **Abteilung** (`Nummer`, `Name`, `Filiale`, `Stock`, `Leiter` [Angestellter])
- **Filiale** (`Nummer`, `Stadt`, `Land`)
- **Lieferant** (`Nummer`, `Name`, `Stadt`, `Land`)
- **Artikel** (`Nummer`, `Name`, `Abteilung`, `Preis`, `Bestand`, `Lieferant`)
- **Verkauf** (`Nummer`, `Datum`, `Artikel`, `Anzahl`, `Angestellter`, `Betrag`)

Leiten Sie für die **Geschäftsdatenbank** aus den Relationen ein vollständiges ER-Diagramm mit Entities, Relationships und Attributen ab.
