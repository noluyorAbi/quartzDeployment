---
created: 2024-03-29 19:25
last modified: 2024-03-29 19:25
tags:
  - DBS
  - Erklärung
fach: "[[DBS]]"
---

# Unterabfragen in SQL in „FROM“


- In `FROM` können Unterabfragen verwendet werden, um dynamische Relationen zu erzeugen. Das Ergebnis dieser Unterabfragen wird behandelt, als wäre es eine eigenständige Tabelle.
  - Wichtig: Jede Unterabfrage in einem `FROM`-Block muss mit einem Alias versehen werden, z.B. `(SELECT … FROM … ) AS xy`. 
  - Der Alias dient als temporärer Name für die Ergebnistabelle und darf nicht mit dem Namen einer existierenden Tabelle oder Spalte in der Datenbank übereinstimmen.
  

# Unterabfragen in SQL in „WHERE“

- Unterabfragen innerhalb der `WHERE`-Klausel erlauben es, die Auswahl von Datensätzen auf Basis von Bedingungen zu verfeinern, die sich auf die Ergebnisse anderer Abfragen beziehen.
- Diese Art von Unterabfragen ermöglicht die Simulation des Existenzquantors, jedoch nicht des Allquantors direkt. Allerdings kann der Allquantor durch die Anwendung einer Negation auf den Existenzquantor umgewandelt werden.

## Unterabfragen in „WHERE“ – Vergleich mit EINEM Wert

- Verwendung: `WHERE ausdruck 𝜃 (SELECT … FROM …)`, wobei 𝜃 für Vergleichsoperatoren steht: `<`, `≤`, `≥`, `>`, `=`, `≠`.
- Eine solche Unterabfrage darf nur ein einzelnes Ergebnis (ein Wert oder ein Attribut eines Tupels) liefern. Der Vergleich wird dann zwischen dem Ausdruck und diesem Ergebnis durchgeführt.

## Unterabfragen in „WHERE“ – Attribut in Liste enthalten

- Syntax: `WHERE ausdruck [NOT] IN (SELECT … FROM …)`
- Diese Form erlaubt den Vergleich eines Ausdrucks mit einer Liste von Werten. Die Unterabfrage kann mehrere Ergebnistupel liefern, muss jedoch auf ein Attribut beschränkt sein.

## Unterabfragen in „WHERE“ – Vergleich mit mindestens einem Wert

- Syntax: `WHERE ausdruck 𝜃 ANY | SOME (SELECT … FROM …)`
- Bedingung ist erfüllt, wenn sie für mindestens einen Wert aus der Unterabfrage zutrifft. `𝜃 ANY` wird benutzt, um Vergleiche wie weniger als das Maximum oder mehr als das Minimum der Ergebnisse zu ermöglichen.

## Unterabfragen in „WHERE“ – Vergleich mit allen Werten muss stimmen

- Syntax: `WHERE ausdruck 𝜃 ALL (SELECT … FROM …)`
- Die Bedingung muss für alle Werte der Unterabfrage zutreffen. Zum Beispiel bedeutet `< ALL`, dass der Ausdruck kleiner als das kleinste Ergebnis der Unterabfrage sein muss.

## Existenzquantor simulieren

- Syntax: `WHERE [NOT] EXISTS (SELECT … FROM …)`
- Diese Konstruktion prüft, ob die Unterabfrage Ergebnisse liefert oder nicht. Es ist eine direkte Umsetzung des Existenzquantors, oft genutzt, um Zusammenhänge zwischen verschiedenen Tabellen auszudrücken.


# Sortierung und Gruppierung der Ergebnisse

## Sortierung der Ergebnisrelation

- `ORDER BY attribut_1 [, attribut_2, …] ASC | DESC`
- Legt die Reihenfolge fest, in der Ergebniszeilen sortiert ausgegeben werden. Bei Gleichheit nach dem ersten Kriterium wird nach weiteren Kriterien sortiert.

## Gruppierung in SQL

- Mit `GROUP BY attribute_1 [, attribute_2, …]` können Ergebnisse in Gruppen sortiert werden, um Aggregatfunktionen wie `AVG()`, `COUNT()`, `MAX()`, `MIN()`, und `SUM()` anzuwenden.
- Wichtig: Alle in der `SELECT`-Klausel aufgeführten Attribute, die nicht Teil einer Aggregatfunktion sind, müssen in der `GROUP BY`-Klausel enthalten sein.
- Die `HAVING`-Klausel erlaubt es, Bedingungen auf die Gruppen anzuwenden, im Gegensatz zur `WHERE`-Klausel, die vor der Gruppierung angewendet wird.


# Reihenfolge 

In SQL bestimmt die Reihenfolge der Klauseln, wie die Abfrage verarbeitet wird. Dies ist wichtig, um die gewünschten Ergebnisse effektiv zu erhalten und Fehler zu vermeiden. Die Standardreihenfolge der wichtigsten SQL-Klauseln in einer SELECT-Abfrage ist wie folgt:

1. **SELECT**: Gibt die Spalten oder Berechnungen an, die zurückgegeben werden sollen.
2. **FROM**: Gibt die Tabellen an, aus denen die Daten ausgewählt werden.
3. **JOIN** (falls vorhanden): Spezifiziert die Tabellen, die mit der Haupttabelle verbunden werden sollen, und die Bedingungen für die Verbindung.
4. **WHERE**: Filtert Zeilen basierend auf einer spezifischen Bedingung.
5. **GROUP BY** (falls vorhanden): Gruppiert die resultierenden Zeilen auf Basis einer oder mehrerer Spalten. Wird oft in Verbindung mit Aggregatfunktionen verwendet.
6. **HAVING** (falls vorhanden): Filtert Gruppen basierend auf einer spezifischen Bedingung. Wird nur verwendet, wenn auch `GROUP BY` verwendet wird.
7. **SELECT** (erneut, aber diesmal mit Aggregatfunktionen, falls `GROUP BY` verwendet wird): In diesem Schritt können Aggregatfunktionen wie `SUM()`, `AVG()`, `MAX()`, usw. angewendet werden, falls Gruppierungen vorgenommen wurden.
8. **ORDER BY**: Sortiert die Ergebnisse der Abfrage in aufsteigender oder absteigender Reihenfolge basierend auf einer oder mehreren Spalten.
9. **LIMIT** (oder in einigen Datenbanksystemen `FETCH FIRST`/`TOP`): Begrenzt die Anzahl der zurückgegebenen Zeilen.

*Beispiel:*
```sql
SELECT Kategorie, AVG(Preis) AS Durchschnittspreis
FROM Verkaeufe
GROUP BY Kategorie
HAVING AVG(Preis) > 100
ORDER BY Durchschnittspreis DESC;
```

Es ist wichtig zu beachten, dass nicht alle diese Klauseln in jeder Abfrage vorhanden sein müssen, aber wenn sie verwendet werden, sollte ihre Reihenfolge der oben genannten Liste entsprechen, um Syntaxfehler zu vermeiden.