---
tags:
  - DBS
  - Klausuraufgabe
fach: "[[Datenbanksysteme (DBS)]]"
date created: Wednesday, 10. April 2024, 14:34
date modified: Wednesday, 3. July 2024, 13:59
---

# 1) Datenmodellierung und Indexstrukturen

## a) Datenmodelle

- **Relationales Datenmodell:** Dieses Model organisiert Daten in Tabellen oder "Relationen". Jede Tabelle besteht aus einer Reihe von Zeilen (auch also Tuple bezeichnet) und Spalten (auch also Attribute bezeichnet). Es ist das am häufigsten verwendete Datenmodell für Datenbanken.
- **Netzwerk Datenmodell:** (Die Beschreibung fehlt im Originaltext)

## b) Vorteile von Indexstrukturen

Die Verwendung von Indexstrukturen in Datenbanksystemen bietet den wesentlichen Vorteil der Verbesserung der Abfrageleistung durch effizienteres Finden von Daten im Vergleich zu einem Volltabellenscan. Indizes können jedoch zusätzlichen Speicherplatz benötigen und die Geschwindigkeit von Schreibvorgängen verlangsamen.

## c) Klassen von Indexstrukturen

- **B-Bäume:** Effizient für Operationen auf Sekundärspeicher und gut für geordnete Durchläufe.
- **Hash-Indizes:** Schnelle Suche durch Einsatz einer Hash-Funktion, jedoch nicht geeignet für geordnete Durchsichten.

## d) Abhängigkeitserhaltende Zerlegung

Eine Zerlegung eines Relationenschemas ist abhängigkeitserhaltend, wenn die Projektionen der funktionalen Abhängigkeiten auf die Schemata der Zerlegung äquivalent zu den ursprünglichen funktionalen Abhängigkeiten sind. Dies ist gegeben, auch wenn nicht alle Abhängigkeiten explicit erhalten bleiben.

## e) Operationen mit Relationen

- **Vereinigung:** Die maximale Anzahl von Tupeln ist die Summe der Tupeln in beiden Relationen, die minimale Anzahl entspricht der Anzahl der Tupeln in der größeren Relation, falls eine vollständige Überschneidung besteht.
- **Division:** Beispiel SQL-Abfrage für die Division von `R` durch `S` in relationaler Algebra.

## f) SQL-Beispiele

```sql
SELECT R.a
FROM R
WHERE NOT EXISTS (
    SELECT *
    FROM S
    WHERE S.a NOT IN (
        SELECT b
        FROM R as R2
        WHERE R2.a = R.a
    )
);
```

# 2) SQL-Schemadefinitionen und Abfragen

## a) Erstellung einer Tabelle

```sql
CREATE TABLE Besucht (
    BID INT,
    Besucher INT,
    Jahr INT NOT NULL,
    Urlaubsziel VARCHAR(100),
    PRIMARY KEY (BID),
    FOREIGN KEY (Besucher) REFERENCES Nutzer(NID),
    FOREIGN KEY (Urlaubsziel) REFERENCES Ort(Kuerzel)
);
```

## b) Ändern und Aktualisieren von Tabellen

```sql
ALTER TABLE Nutzer
ADD Status INTEGER;

UPDATE Nutzer
SET Status = Alter * Alter
WHERE Wohnort = 'MUC';

UPDATE Nutzer
SET Status = NULL
WHERE Wohnort <> 'MUC';
```

## c) Selektive Abfragen

```sql
SELECT Vorname, Nachname
FROM Nutzer
WHERE Wohnort IN (
    SELECT Kuerzel FROM Ort WHERE Name = 'Berlin'
) AND Alter = 25
ORDER BY Nachname ASC, Vorname ASC;
```

## d) Aggregierte Daten

```sql
SELECT O.Land, COUNT(DISTINCT B.Besucher) AS Anzahl_Besucher
FROM Besucht B
JOIN Ort O ON B.Urlaubsziel = O.Kuerzel
WHERE B.Jahr = 2022
GROUP BY O.Land;
```

## e) Ansichten zur Distanzberechnung

```sql
CREATE VIEW Distanzen AS
SELECT O1.Kuerzel AS vonOrt, O2.Kuerzel AS nachOrt,
       ABS(O1.X - O2.X) + ABS(O1.Y - O2.Y) AS Distanz
FROM Ort O1, Ort O2
WHERE O1.Kuerzel <> O2.Kuerzel;
```

# Aufgabe 3: Relationale Algebra

## a) Projektion und Selektion

```sql
πVorname, Nachname​(σX=1∧Y=2​(Ort) ⋈ Ort.Kuerzel=Nutzer.Wohnort​(Nutzer))
```

## b) Mengenoperationen

```sql
πNID​((σUrlaubsziel=′MUC′​(Besucht))∩(σUrlaubsziel=′BER′​(Besucht)))
```

<!-- DISQUS SCRIPT COMMENT START -->

<hr style="border: none; height: 2px; background: linear-gradient(to right, #f0f0f0, #ccc, #f0f0f0); margin-top: 4rem; margin-bottom: 5rem;">
<div id="disqus_thread"></div>
<script>
    /**
    * RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    * LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL; // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://myuninotes.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

<!-- DISQUS SCRIPT COMMENT END -->
