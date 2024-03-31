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
-
Lösung:
```sql
SELECT vorlNr,titel,ROUND(AVG(note),3) AS Durchschnittsnote FROM Pruefungen 
NATURAL JOIN Vorlesungen
GROUP BY titel,vorlNr 
```

### b) Bestimmen Sie Personalnummer und Namen eines jeden Professors, zusammen mit der Anzahl der unterschiedlichen Vorlesungen, die er hält. Professoren ohne Vorlesung sollen mit einer Vorlesungsanzahl von 0 angegeben werden.

*Sortieren Sie das Ergebnis absteigend nach der Anzahl der Vorlesungen.*

```sql
SELECT persNr, name, COUNT(vorlNr) AS Anzahl_Vorlesungen FROM Professoren 
LEFT JOIN Vorlesungen ON persNr = gelesenVon 
GROUP BY persNr, name 
ORDER BY Anzahl DESC
```

### <span style="color: red">!!!</span> c) Bestimmen Sie für jeden Studenten (Anzuzeigen: Matrikelnummer und Name), wie viele andere Studenten aus einem höheren Semester dieser kennt (d.h. beide besuchen mindestens eine Vorlesung gemeinsam). Zeigen Sie nur Studenten an, die mehr als zwei andere Studenten aus einem höheren Semester kennen.

```sql
SELECT s1.matrNr, s1.name, COUNT(DISTINCT s2.matrNr) AS Anzahl_Studenten_Aus_Hoeheren_Semestern FROM Studenten s1
JOIN hoeren h1 ON s1.matrNr = h1.matrNr
JOIN  hoeren h2 ON h1.vorlNr = h2.vorlNr AND h1.matrNr != h2.matrNr
JOIN Studenten s2 ON h2.matrNr = s2.matrNr AND s2.semester > s1.semester
GROUP BY s1.matrNr, s1.name
HAVING COUNT(DISTINCT s2.matrNr) > 2;
```

### <span style="color: red">!!!</span> d) Bestimmen Sie die Professoren (Anzuzeigen: Personalnummer und Name), für die mindestens zwei Studenten mindestens drei Vorlesungen des jeweiligen Professors hören 

*Tipp: Erstellen Sie passende Views, um die Anfrage übersichtlicher zu gestalten. Benutzen Sie hierzu die Syntax aus der Vorlesung!*

```sql
CREATE VIEW AZ AS
(
SELECT matrNr, gelesenVon, COUNT(*) as anz
FROM Vorlesungen NATURAL JOIN hoeren
GROUP BY matrNr, gelesenVon
HAVING COUNT(*) >= 3
)
```

```sql
SELECT persNr, name
FROM Professoren JOIN AZ ON persNr = 
GROUP BY persNr, namegelesenVon
HAVING COUNT(*) >= 2
```

#### Erklärung 
- **`CREATE VIEW AZ`**: Erstellt eine temporäre Tabelle zur Vereinfachung komplexer Abfragen.
- **`SELECT matrNr, gelesenVon, COUNT(*) as anz`**: Wählt Studenten-ID, Professor-ID und zählt Vorlesungen.
- **`FROM Vorlesungen NATURAL JOIN hoeren`**: Verbindet Vorlesungen mit gehörten Vorlesungen auf Basis gleicher Spalten.
- **`GROUP BY matrNr, gelesenVon`**: Gruppiert Ergebnisse nach Student und Professor.
- **`HAVING COUNT(*) >= 3`**: Berücksichtigt nur Gruppen mit mindestens drei Vorlesungen.

- **`SELECT persNr, name`**: Wählt Professoren-ID und -Namen.
- **`FROM Professoren JOIN AZ ON persNr = gelesenVon`**: Verknüpft Professoren mit dem View, basierend auf ID.
- **`GROUP BY persNr, name`**: Gruppiert nach Professor.
- **`HAVING COUNT(*) >= 2`**: Filtert Professoren mit mindestens zwei zugehörigen Studenten.

