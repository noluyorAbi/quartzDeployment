---
tags:
  - DBS
  - Klausuraufgabe
fach: "[[DBS]]"
date created: Tuesday, 9. April 2024, 14:00
date modified: Tuesday, 9. April 2024, 16:23
---

# Aufgabe 1: **Gemischte Fragen**

>[!note] Aufgabenstellung
>Gegeben sei das Relationenschema $R = (\underline A, B, C, D)$. Wir wissen, dass $A$ der einzige Schlüsselkandidat ist. Über weitere funktionale Abhängigkeiten gibt es keine Informationen, es kann aber weitere funktionale Abhängigkeiten geben. Nehmen Sie an, dass $R$ die erste Normalform erfüllt. 
>
## (a) Können wir mit Sicherheit davon ausgehen, dass $R$ auch die zweite und dritte Normalform erfüllt? Begründen Sie Ihre Aussage jeweils in ein bis zwei Sätzen.


>[!success]- Lösung (klicken zum aufklappen)
> ### 2.NF
> Für die [[Normalformen und Synthesealgorithmus#2. Normalform (2NF)]] muss gellten: 
> - jedes Nicht-Schlüssel-Attribut (NSA) ist voll funktional abhängig von jedem Schlüsselkandidaten
> 
> Diese Bedingung ist erfüllt, da $A$ der einzige Schlüssel ist und alle Attribute die vom Schlüsselkandidaten $A$ abhängig sind automatisch von allen Schlüsselkandidaten (`also nur A`) abhängig sind. Es kann also garkeinen Fall geben, dass ein Attribute *nicht* von allen Schlüsselattributen abhängig sind.
> 
> In der 2.NF sind zudem [[Normalformen und Synthesealgorithmus#2. Normalform (2NF)|transitive Abhängigkeiten]] erlaubt wie z.B $B→C$
>
> ### 3.NF
> Für die [[Normalformen und Synthesealgorithmus#3. Normalform (3NF)]] muss gellten: 
> - Keine transitiven Abhängigkeiten (Kein Nichtschlüssel zu anderem Nichtschlüssel) wobei der eine Nichtschlüssel wiederum von einem Schlüsselkandidaten abhängt
> - *"Vermittler"* hängt also von Schlüsselkandidat ab ist aber selber keiner und hat eine Abhängigkeit zu einem Nichtschlüsselkandidaten
> - Reicht wenn ein Nichtschlüssel Attribute von *irgendeinem* Schlüsselkandidaten abhängig ist 
> 
> Die 3.NF ist hier nicht gegeben, da es eine Abhängigkeit $A→B$ geben kann, und dann wiederum eine Abhängigkeit $B→C$ wo $B$ also der *Vermittler* dient


## (b) Gegeben seien die Relationen $R = (A, B, C)$ und $S = (B, C, D)$. Relation $R$ enthält 50 Tuple und Relation $S$ enthält 10 Tuple. Gegeben seien außerdem folgende Anfragen:

$A_1$:
```sql
SELECT DISTINCT * 
FROM R, S;
```

$A_2$:
```sql
SELECT * 
FROM R NATURAL JOIN S;
```

- $A_1$ ist das Kreuzprodukt von $R$ und $S$ $(R \times S)$ [[CrossJoin in SQL|(CrossJoin in SQL)]]

- Minimale Anzahl von Ergebnistupel für Anfrage $A_1$:
>[!success]- **Lösung (klicken zum Aufklappen)**
> #### Berechnung und Erklärung:
> Die minimale Anzahl der Ergebnistupel ist das Product der Anzahl der Tuple in den beiden beteiligten Relationen. Dies ergibt:
> $$
> 50 \text{ Tupel in } R \times 10 \text{ Tupel in } S = 500 \text{ Ergebnistupel}
> $$
  
- Maximale Anzahl von Ergebnistupel für Anfrage $A_1$**:
>[!success]- **Lösung (klicken zum Aufklappen)**
> #### Berechnung und Erklärung:
> Die maximale Anzahl der Ergebnistupel ist identisch zur minimalen, da es sich um eine Kreuzprodukt-Operation handelt, die alle Kombinationen der Tuple aus beiden Relationen erzeugt:
> $$
> 50 \text{ Tupel in } R \times 10 \text{ Tupel in } S = 500 \text{ Ergebnistupel}
> $$

- Anzahl der Attribute in der Ergebnisrelation von Anfrage $A_1$**:
>[!success]- **Lösung (klicken zum Aufklappen)**
> - **Ergebnis**: 6 Attribute.

- Minimale Anzahl von Ergebnistupel für Anfrage $A_2$**:
>[!success]- **Lösung (klicken zum Aufklappen)**
> - **Ergebnis**: Mindestens 0 Ergebnistupel, da es möglich ist, dass keine Übereinstimmungen in den gemeinsamen Spalten existieren.

- Maximale Anzahl von Ergebnistupel für Anfrage $A_2$
>[!success]- **Lösung (klicken zum Aufklappen)**
> #### Berechnung:
> Im schlimmsten Fall stimmt jedes Tuple in $R$ mit jedem Tuple in $S$ bezüglich der Werte in den Spalten $B$ und $C$ überein. Daher ist die Anzahl der Ergebnistupel das Product der Anzahl der Tuple in beiden Relationen:
> $$50 \text{ Tupel in } R \times 10 \text{ Tupel in } S = 500$$

- Anzahl der Attribute in der Ergebnisrelation von Anfrage $A_2$
>[!success]- **Lösung (klicken zum Aufklappen)**
>- **Ergebnis**: 4 Attribute.


## (c) Gegeben seien die Transaktionen $T_1$, $T_2$ und $T_3$, wobei Transaktion $T_1$ aus 5 Einzelaktionen, Transaktion $T_2$ aus 7 Einzelaktionen und Transaktion $T_3$ aus 8 Einzelaktionen besteht. Wie viele mögliche verschiedene serielle Schedules gibt es?

- $T_{1}$ hat 5 Einzelaktionen
- $T_2$ hat 7 Einzelaktionen
- $T_3$ hat 8 Einzelaktionen

$$
serielle \ Schedules \ Anzahl: 3! = 6
$$

## (d) Was unterscheidet eine materialisierte View von einer gewöhnlichen View?

- materialisierte Views kann man abspeichern und wie eine Art eigene Schema benutzen, die Ergebnisse der materialisierten View werden physisch in eienr Tabelle gespeichert
- Eine gewöhnliche View speichert keine Daten physisch. Stattdessen handelt es sich um eine Abfrage, die bei Bedarf ausgeführt wird, um die aktuellen Daten aus den zugrunde liegenden Tabellen zu generieren 

### Was ist der wesentliche Vorteil einer materialisierten View?

- Verbesserte Abfrageleistung durch physische Speicherung der Abfrageergebnisse
- Schnellerer Zugriff auf Daten, da Abfrage nicht bei jedem Zugriff erneut ausgeführt werden muss
- Kürzere Antwortzeiten insbesondere bei komplexen Abfragen oder großen Datenmengen
- Möglichkeit zur Speicherung vorausberechneter Daten, was die Leistung weiter verbessert
- Effizientere Datenverarbeitung und -abfrage, besonders in Umgebungen mit großen Datenmengen oder komplexen Abfragen