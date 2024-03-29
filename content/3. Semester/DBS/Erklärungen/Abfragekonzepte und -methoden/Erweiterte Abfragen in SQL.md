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
