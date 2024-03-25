---
created: 2024-03-25 16:25
last modified: 2024-03-25 16:25
tags:
  - DBS
  - Übungsblatt
fach: "[[DBS]]"
---
Gegeben sei die folgende relationale "Geschäftsdatenbank" einer Kaufhauskette. Es kann davon ausgegangen werden, dass eine Abteilung nur von einem Angestellten geleitet wird, welcher selbst in dieser Abteilung tätig ist:

- **Angestellter** (Nummer, Name, Gehalt, Abteilung, Geburtsjahr, Einstellungsdatum)
- **Abteilung** (Nummer, Name, Filiale, Stock, Leiter\[Angestellter\])
- **Filiale** (Nummer, Stadt, Land)
- **Lieferant** (Nummer, Name, Stadt, Land)
- **Artikel** (Nummer, Name, Abteilung, Preis, Bestand, Lieferant)
- **Verkauf** (Nummer, Datum, Abteilung, Artikel, Anzahl, Angestellter, Betrag)

Für die Attribute gelten dabei folgende Wertebereiche:
- **Nummer**: Integer
- **Gehalt**: Decimal(10,2)
- **Geburtsjahr**: Integer
- **Einstellungsdatum**: Date
- **Name**: String
- **Stock**: Integer
- **Stadt**: String
- **Land**: String
- **Preis**: Decimal
- **Bestand**: Integer
- **Datum**: Date
- **Anzahl**: Integer
- **Betrag**: Decimal

Hinweis: Im obigen Schema werden Fremdschlüssel durch eine Linie über dem entsprechenden Attribut gekennzeichnet. Falls der Name der referenzierten Relation nicht dem Namen des Fremdschlüssels entspricht, wird der Name der Relation in eckigen Klammern hinter dem Fremdschlüssel angegeben.

# Aufgabe 6-1: *Anfragen im Tupel- und Bereichskalkül*

**Syntaxerweiterung für den Tupel- und Bereichskalkül:**
- **[[Tupelkalkül]]:** Hier können neue Tupel durch den Tupelkonstruktor `[]` aus den Komponenten anderer Tupelvariablen gebildet werden. Die Namen der Attribute im Schema des neuen Tupels ergeben sich aus den Attributnamen der genutzten Komponenten. Ein Beispiel hierfür ist der Ausdruck, der die Namen aller Angestellten zurückgibt:
  - `Schema(t) = Schema(Angestellter); {[t.Name] | t ∈ Angestellter}`
- **[[Bereichskalkül]]:** Der Unterstrich `_` dient als Platzhalter für nicht benötigte Attribute einer Relation, was die Formulierung von Anfragen vereinfacht. Beispielsweise kann für die Auswahl aller Städte aus der Relation `Filiale`, in denen sich eine Filiale befindet, folgender Ausdruck verwendet werden:
  - `{la | ∃nr, st: Filiale(nr, st, la)} = {la | Filiale(_, _, la)}`

**Aufgabenstellung:** Formulieren Sie Anfragen jeweils im Tupel- und Bereichskalkül. Bei Anfragen, die den Tupelkalkül verwenden, geben Sie zusätzlich das Schema aller freien Variablen an.

# Needed Know-How:
- [[Tupelkalkül]]
- [[Bereichskalkül]]
### a) Bestimmen Sie die Namen aller Angestellten mit einem Gehalt von weniger als 2000.

