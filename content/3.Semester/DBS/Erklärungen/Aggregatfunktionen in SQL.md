---
created: 2024-03-30 01:52
last modified: 2024-03-30 01:52
tags:
  - DBS
  - Erklaerung
fach: "[[Datenbanksysteme (DBS)]]"
date created: Saturday, 30. March 2024, 01:52
date modified: Friday, 5. April 2024, 01:47
---

# Aggregatfunktionen in SQL

Aggregatfunktionen in SQL sind spezielle Funktionen, die auf eine Sammlung von Werten (zum Beispiel alle Werte in einer Spalte) angewendet werden und daraus einen einzelnen Wert berechnen. Diese Funktionen sind besonders nützlich, um Zusammenfassungen, Statistiken oder andere Formen von aggregierten Daten aus Datenbankabfragen zu extrahieren. Nachfolgend sind einige der am häufigsten verwendeten Aggregatfunktionen in SQL beschrieben.

## COUNT()

Die `COUNT()` Function zählt die Anzahl der Zeilen, die einem bestimmten Kriterium entsprechen.

```sql
SELECT COUNT(column_name)
FROM table_name
WHERE condition;
```

- **Beispiel**: Zählen aller Zeilen in der Tabelle `mitarbeiter`.

```sql
SELECT COUNT(*)
FROM mitarbeiter;
```

## SUM()

Die `SUM()` Function summiert die Werte einer bestimmten Spalte.

```sql
SELECT SUM(column_name)
FROM table_name
WHERE condition;
```

- **Beispiel**: Summierung der Gehälter aller Mitarbeiter.

```sql
SELECT SUM(gehalt)
FROM mitarbeiter;
```

## AVG()

Die `AVG()` Function berechnet den Durchschnittswert einer bestimmten Spalte.

```sql
SELECT AVG(column_name)
FROM table_name
WHERE condition;
```

- **Beispiel**: Berechnung des Durchschnittsgehalts der Mitarbeiter.
- <b style="color:red;">Achtung!</b> Average benötigt bei mehr also einer Attribute im `SELECT` [[Aggregatfunktionen in SQL#GROUP BY|GROUP BY]]

```sql
SELECT AVG(gehalt)
FROM mitarbeiter;
```

## MIN() Und MAX()

Die `MIN()` und `MAX()` Funktionen ermitteln den kleinsten bzw. größten Wert einer Spalte.

```sql
SELECT MIN(column_name), MAX(column_name)
FROM table_name
WHERE condition;
```

- **Beispiel**: Ermittlung des niedrigsten und höchsten Gehalts under den Mitarbeitern.

```sql
SELECT MIN(gehalt), MAX(gehalt)
FROM mitarbeiter;
```

## GROUP BY

Die `GROUP BY` Klausel wird oft in Verbindung mit Aggregatfunktionen verwendet, um die Resultate nach einem oder mehreren Spalten zu gruppieren.

```sql
SELECT column_name, AGGREGATE_FUNCTION(column_name)
FROM table_name
WHERE condition
GROUP BY column_name;
```

- **Beispiel**: Durchschnittsgehalt der Mitarbeiter, gruppiert nach Abteilung.

```sql
SELECT abteilung, AVG(gehalt)
FROM mitarbeiter
GROUP BY abteilung;
```

## HAVING

Die `HAVING` Klausel wird verwendet, um Bedingungen auf Aggregatfunktionen anzuwenden, ähnlich der `WHERE` Klausel, die auf einzelne Datensätze angewendet wird.

```sql
SELECT column_name, AGGREGATE_FUNCTION(column_name)
FROM table_name
GROUP BY column_name
HAVING AGGREGATE_FUNCTION(column_name) condition;
```

- **Beispiel**: Abteilungen mit einem Durchschnittsgehalt über 5000 anzeigen.

```sql
SELECT abteilung, AVG(gehalt)
FROM mitarbeiter
GROUP BY abteilung
HAVING AVG(gehalt) > 5000;
```

Aggregatfunktionen sind ein mächtiges Werkzeug in SQL, um komplexe Datenabfragen effizient und effektiv zu bearbeiten, indem sie detaillierte Daten in nützliche Informationen und Einsichten umwandeln.

# [[Erweiterte Abfragen in SQL#Reihenfolge|Reihenfolge der Keywords]]

<!-- DISQUS SCRIPT COMMENT START -->

<!-- DISQUS RECOMMENDATION START -->

<div id="disqus_recommendations"></div>

<script> 
(function() { // REQUIRED CONFIGURATION VARIABLE: EDIT THE SHORTNAME BELOW
var d = document, s = d.createElement('script'); // IMPORTANT: Replace EXAMPLE with your forum shortname!
s.src = 'https://myuninotes.disqus.com/recommendations.js'; s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>
Please enable JavaScript to view the 
<a href="https://disqus.com/?ref_noscript" rel="nofollow">
comments powered by Disqus.
</a>
</noscript>

<!-- DISQUS RECOMMENDATION END -->

<hr style="border: none; height: 2px; background: linear-gradient(to right, #f0f0f0, #ccc, #f0f0f0); margin-top: 4rem; margin-bottom: 5rem;">
<div id="disqus_thread"></div>
<script>
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
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
