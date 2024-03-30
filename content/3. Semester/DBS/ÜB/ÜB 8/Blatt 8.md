---
created: 2024-03-29 23:20
last modified: 2024-03-29 23:20
tags:
  - DBS
  - Übungsblatt
fach: "[[DBS]]"
---
# Aufgabe 8-1 **Anfragen in SQL** [[Aggregatfunktionen in SQL]]

Gegeben seien die Relationen `Professoren`, `Personal`, `Studenten`, `Vorlesungen`, `Voraussetzungen`, `hoeren` und `Pruefungen` als Datenmodell für eine Universitätsdatenbank:

- `Professoren` (`persNr`, `name`, `raum`)
- `Studenten` (`matrNr`, `name`, `semester`)
- `Vorlesungen` (`vorlNr`, `titel`, `ects`, `gelesenVon`[Professoren])
- `Voraussetzungen` (`vorausgesetzt`[Vorlesungen], `vorlesung`[Vorlesungen])
- `hoeren` (`matrNr`[Studenten],`vorlNr`[Vorlesungen])
- `Pruefungen` (`matrNr`[Studenten],`vorlNr`[Vorlesungen], `note`)

Formulieren Sie folgende Anfragen für das obige Datenbankschema in der Datenbanksprache SQL.

Hinweis: Am Ende des Übungsblattes finden Sie zum Verständnis eine passende Beispielausprägung des Relationenschemas. Achten Sie darauf, dass Ihre Anfrage für jede mögliche Ausprägung der Datenbank das richtige Ergebnis liefert; nicht nur für die gegebene Beispielausprägung. Darüber Hinaus finden Sie eine Beispielausprägung auch in der SQL-Schnittstelle.

### a) Bestimmen Sie für jede Vorlesung (Anzuzeigen: Nummer und Titel) die Durchschnittsnote (gerundet auf drei Stellen) über alle in dem Fach stattgefundenen Prüfungen. [[Aggregatfunktionen in SQL#AVG()]]

*Zum Runden können Sie die Funktion `ROUND` benutzen. Beispielsweise wird das Ergebnis der Berechnung in folgender Anfrage auf drei Nachkommastellen gerundet:*

```sql
SELECT ROUND(menge*gewicht / 1000,3) FROM LTP NATURAL JOIN T
```

```sql
SELECT vorlNr,titel,ROUND(AVG(note),3) AS Durchschnittsnote FROM Pruefungen 
NATURAL JOIN Vorlesungen
GROUP BY titel,vorlNr 
```

### b) Bestimmen Sie Personalnummer und Namen eines jeden Professors, zusammen mit der Anzahl der unterschiedlichen Vorlesungen, die er hält. Professoren ohne Vorlesung sollen mit einer Vorlesungsanzahl von 0 angegeben werden.

*Sortieren Sie das Ergebnis absteigend nach der Anzahl der Vorlesungen.*
