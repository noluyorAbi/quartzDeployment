---
tags:
  - DBS
  - Klausuraufgabe
fach: "[[DBS]]"
date created: Tuesday, 9. April 2024, 14:00
date modified: Tuesday, 9. April 2024, 17:19
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
>[!success]- Lösung (klicken zum Aufklappen)
> #### Berechnung und Erklärung:
> Die minimale Anzahl der Ergebnistupel ist das Product der Anzahl der Tuple in den beiden beteiligten Relationen. Dies ergibt:
> $$
> 50 \text{ Tupel in } R \times 10 \text{ Tupel in } S = 500 \text{ Ergebnistupel}
> $$
  
- Maximale Anzahl von Ergebnistupel für Anfrage $A_1$:
>[!success]- Lösung (klicken zum Aufklappen)
> #### Berechnung und Erklärung:
> Die maximale Anzahl der Ergebnistupel ist identisch zur minimalen, da es sich um eine Kreuzprodukt-Operation handelt, die alle Kombinationen der Tuple aus beiden Relationen erzeugt:
> $$
> 50 \text{ Tupel in } R \times 10 \text{ Tupel in } S = 500 \text{ Ergebnistupel}
> $$

- Anzahl der Attribute in der Ergebnisrelation von Anfrage $A_1$:
>[!success]- Lösung (klicken zum Aufklappen)
> - **Ergebnis**: 6 Attribute.

- Minimale Anzahl von Ergebnistupel für Anfrage $A_2$:
>[!success]- Lösung (klicken zum Aufklappen)
> - **Ergebnis**: Mindestens 0 Ergebnistupel, da es möglich ist, dass keine Übereinstimmungen in den gemeinsamen Spalten existieren.

- Maximale Anzahl von Ergebnistupel für Anfrage $A_2$
>[!success]- Lösung (klicken zum Aufklappen)
> #### Berechnung:
> Im schlimmsten Fall stimmt jedes Tuple in $R$ mit jedem Tuple in $S$ bezüglich der Werte in den Spalten $B$ und $C$ überein. Daher ist die Anzahl der Ergebnistupel das Product der Anzahl der Tuple in beiden Relationen:
> $$50 \text{ Tupel in } R \times 10 \text{ Tupel in } S = 500$$

- Anzahl der Attribute in der Ergebnisrelation von Anfrage $A_2$
>[!success]- Lösung (klicken zum Aufklappen)
>- **Ergebnis**: 4 Attribute.


## (c) Gegeben seien die Transaktionen $T_1$, $T_2$ und $T_3$, wobei Transaktion $T_1$ aus 5 Einzelaktionen, Transaktion $T_2$ aus 7 Einzelaktionen und Transaktion $T_3$ aus 8 Einzelaktionen besteht. Wie viele mögliche verschiedene serielle Schedules gibt es?

- $T_{1}$ hat 5 Einzelaktionen
- $T_2$ hat 7 Einzelaktionen
- $T_3$ hat 8 Einzelaktionen

>[!success]- Lösung (klicken zum Aufklappen)
>$$
>serielle \ Schedules \ Anzahl: 3! = 6
>$$

## (d) Was unterscheidet eine materialisierte View von einer gewöhnlichen View?

>[!success]- Lösung (klicken zum Aufklappen)
>- materialisierte Views kann man abspeichern und wie eine Art eigene Schema benutzen, die Ergebnisse der materialisierten View werden physisch in eienr Tabelle gespeichert
>- Eine gewöhnliche View speichert keine Daten physisch. Stattdessen handelt es sich um eine Abfrage, die bei Bedarf ausgeführt wird, um die aktuellen Daten aus den zugrunde liegenden Tabellen zu generieren 

### Was ist der wesentliche Vorteil einer materialisierten View?

>[!success]- Lösung (klicken zum Aufklappen)
>- Verbesserte Abfrageleistung durch physische Speicherung der Abfrageergebnisse
>- Schnellerer Zugriff auf Daten, da Abfrage nicht bei jedem Zugriff erneut ausgeführt werden muss
>- Kürzere Antwortzeiten insbesondere bei komplexen Abfragen oder großen Datenmengen
>- Möglichkeit zur Speicherung vorausberechneter Daten, was die Leistung weiter verbessert
>- Effizientere Datenverarbeitung und -abfrage, besonders in Umgebungen mit großen Datenmengen oder komplexen Abfragen

## (e) Was ist die maximale und minimale Anzahl von Schlüsseln, die ein innerer Knoten in einem B-Baum der Ordnung 10 haben kann?

>[!success]- Lösung (klicken zum Aufklappen)
> **Minimal:** 10
> **Maximal:** 20


--- 

# Aufgabe 2 **SQL & Kalküle** [[Tupelkalkül]] |[[Bereichskalkül]] | [[Erweiterte Abfragen in SQL]]


>[!note] Aufgabenstellung
>Gegeben sei das folgende Datenbankschema, das für die Speicherung der Daten eines Geheimdienstes verwendet wird. Zusätzlich ist ein Teil seiner Ausprägung gegeben. Die Primärschlüsselattribute sind jeweils unterstrichen. Die Attributnamen sind global eindeutig, d.h. Fremdschlüsselbeziehungen sind anhand des Attributnamens erkennbar.
>
>In der Relation `Agenten` werden alle Agenten mit einer eindeutigen Nummer und ihrem Namen gespeichert. Die Relation `Einsätze` beschreibt Einsätze, die jeweils mit einem eindeutigen Namen beschrieben werden. Einsätze finden an einem bestimmten Datum und Ort statt und werden aufgrund einer Zielperson durchgeführt. Die Agenten tragen Decknamen (Relation `Decknamen`). Dabei ist einem Decknamen jeweils ein Agent eindeutig zuzuordnen. Ein Agent kann aber mehrere Decknamen haben. Agenten nehmen gegen Bezahlung an Einsätzen teil (Relation `nimmt-teil`). Außerdem kann ein Agent auch under mehreren Decknamen an einem Einsatz teilnehmen.

$Agenten (\underline{ANr}, Name)$
$Einsätze (\underline{EName}, Datum, Ort,Zielperson)$
$Decknamen (\underline{Deckname}, ANr)$
$nimmt-teil (\underline{EName}, \underline{Deckname},Bezahlung)$

## (a) Geben Sie die Anweisung in [[Data Definition Language (DDL)|SQL-DDL]] an, die notwendig ist, um die Relation "nimmt-teil" wie beschrieben zu erzeugen. Achten Sie dabei auf Fremdschlüsselbeziehungen und wählen Sie anhand der gegebenen Ausprägungen sinnvolle Datentypen. Die Bezahlung ist ganzzahlig und darf niemals negative sein. Gehen Sie davon aus, dass alle Zeichenketten eine maximale Länge von 20 haben.


>[!success]- Lösung (klicken zum Aufklappen)
>- **Kurzform:**
>   ```sql
>   CREATE TABLE nimmt-teil
>   (
>       EName VARCHAR(20) REFERENCES Einsätze,
>       Deckname VARCHAR(20) REFERENCES Decknamen,
>       Bezahlung INTEGER CHECK (Bezahlung >= 0),
>       PRIMARY KEY (EName,Deckname)
>   )
>   ```
>- **Längere Form:**
>   ```sql
>   CREATE TABLE nimmt-teil
>   (
>       EName VARCHAR(20) REFERENCES Einsätze(EName),
>       Deckname VARCHAR(20) REFERENCES Decknamen(Deckname),
>       Bezahlung INTEGER CHECK (Bezahlung >= 0),
>       PRIMARY KEY (EName,Deckname)
>   )
>   ```
>- **Ausführliche Form:**
>   ```sql
>   CREATE TABLE `nimmt-teil`
>   (
>       EName VARCHAR(20),
>       Deckname VARCHAR(20),
>       Bezahlung INTEGER CHECK (Bezahlung >= 0),
>       PRIMARY KEY (`EName`, `Deckname`),
>       FOREIGN KEY (`EName`) REFERENCES `Einsätze`(`EName`),
>       FOREIGN KEY (`Deckname`) REFERENCES `Decknamen`(`Deckname`)
>   )
>   ```
>
>Alle drei Formen sind korrekt, aber die kürzeste Form ist am prägnantesten.



## (b) Erstellen Sie eine Liste aller Einsätze, an denen der Agent under dem Decknamen 007 beteiligt war. Die Liste soll den Einsatznamen, das Datum, den Ort und die Zielperson enthalten. Sortieren Sie die Liste absteigend nach dem Namen der Zielperson und bei gleicher Zielperson aufsteigend nach dem Datum.

$Agenten (\underline{ANr}, Name)$
$Einsätze (\underline{EName}, Datum, Ort,Zielperson)$
$Decknamen (\underline{Deckname}, ANr)$
$nimmt-teil (\underline{EName}, \underline{Deckname},Bezahlung)$

>[!success]- Lösung (klicken zum Aufklappen)
>
>```sql
SELECT EName,Datum,Ort,Zielperson FROM Einsätze
JOIN nimmt-teil ON Einsätze.EName = nimmt-teil.EName
WHERE Deckname = "007"
ORDER BY Zielperson DESC, Datum ASC
>```

## (c) Geben Sie zu jedem Agenten den Realnamen und dessen Einsatzorte an. Nehmen Sie jedoch nur diejenigen Orte auf, an denen noch kein anderer Agent einen Einsatz hatte.

$Agenten (\underline{ANr}, Name)$
$Einsätze (\underline{EName}, Datum, Ort,Zielperson)$
$Decknamen (\underline{Deckname}, ANr)$
$nimmt-teil (\underline{EName}, \underline{Deckname},Bezahlung)$

>[!success]- Lösung (klicken zum Aufklappen)
>```sql
>SELECT Name, Ort 
>FROM Agenten A1 
>JOIN Decknamen D1 ON D1.ANr = A1.ANr 
>JOIN nimmt-teil NT1 ON NT1.Deckname = D1.Deckname 
>JOIN Einsätze E1 ON NT1.EName = E1.EName 
>WHERE NOT EXISTS ( SELECT * FROM Agenten A2 
> 				   JOIN Decknamen D2 ON D2.ANr = A2.ANr 
> 				   JOIN nimmt-teil NT2 ON NT2.Deckname = D2.Deckname 
> 				   JOIN Einsätze E2 ON NT2.EName = E2.EName 
> 				   WHERE E1.Ort = E2.Ort AND NOT(A1.Name = A2.Name)
>				 )
>```

## (d) Geben Sie für jeden Einsatz den Einsatznamen sowie die Gesamtkosten aller Bezahlungen für die Agenten aus. Jedoch sollen dabei nur die Bezahlung der Agenten mitgezählt werden, die schon an mehr als zwei <u>unterschiedlichen</u> Einsätzen beteiligt waren.

$Agenten (\underline{ANr}, Name)$
$Einsätze (\underline{EName}, Datum, Ort,Zielperson)$
$Decknamen (\underline{Deckname}, ANr)$
$nimmt-teil (\underline{EName}, \underline{Deckname},Bezahlung)$

Hier ist eine kurze, stichpunktartige Erklärung, wie man auf die SQL-Abfrage kommt, die in den Callout integriert ist:

Hier ist der Callout, der sowohl die SQL-Abfrage als auch die stichpunktartige Erklärung ihrer Komponenten enthält:

>[!success] **Lösung (klicken zum Aufklappen)**
>```sql
>SELECT E.EName, SUM(NT.Bezahlung) AS Gesamtkosten FROM Einsätze E
>JOIN nimmt-teil NT ON E.EName = NT.EName
>JOIN Decknamen D ON NT.Deckname = D.Deckname
>WHERE D.ANr IN (SELECT D2.ANr FROM Decknamen D2
>                JOIN nimmt-teil NT2 ON D2.Deckname = NT2.Deckname
>                GROUP BY D2.ANr
>                HAVING COUNT(DISTINCT NT2.EName) > 2)
>GROUP BY E.EName;
>```
>### Schritte zur Erstellung der SQL-Abfrage
>- **Verknüpfung der Tabellen**: Verbinde die `Einsätze`-, `nimmt-teil`- und `Decknamen`-Tabellen, um Einsätze mit den zugehörigen Bezahlungen und Agenten zu assoziieren.
>   - `FROM Einsätze E JOIN nimmt-teil NT ON E.EName = NT.EName`: Jeder Einsatz wird mit den Details seiner Teilnahme verknüpft.
>   - `JOIN Decknamen D ON NT.Deckname = D.Deckname`: Die Teilnahmeinformationen werden über Decknamen mit den Agenten verbunden.
>- **Filtern von Agenten**: Wähle nur die Agenten aus, die an mehr als zwei verschiedenen Einsätzen beteiligt waren.
>   - `WHERE D.ANr IN (...)`: Es wird eine Unterabfrage verwendet, die die Agenten filtert.
>   - `SELECT D2.ANr FROM Decknamen D2 JOIN nimmt-teil NT2 ON D2.Deckname = NT2.Deckname`: Diese Unterabfrage sammelt alle Agenten und deren Einsätze.
>   - `GROUP BY D2.ANr`: Gruppierung der Agenten, um die Einsätze je Agent zu zählen.
>   - `HAVING COUNT(DISTINCT NT2.EName) > 2`: Agenten, die an mehr als zwei unterschiedlichen Einsätzen teilgenommen haben, werden ausgewählt.
>- **Aggregieren der Kosten**: Berechne die Gesamtkosten der Bezahlungen für jeden Einsatz.
>   - `SUM(NT.Bezahlung) AS Gesamtkosten`: Summiert alle Bezahlungen, die den oben genannten Kriterien entsprechen.
>   - `GROUP BY E.EName`: Die Ergebnisse werden nach Einsatzname gruppiert, um die Kosten pro Einsatz auszugeben.
>### Ziel der Abfrage
>- Die Abfrage liefert den Namen jedes Einsatzes zusammen mit den Gesamtkosten der Zahlungen an Agenten, die intensiv (mehr als zwei verschiedene Einsätze) involviert waren.

## (e) Geben Sie die Namen der 7.ielpersonen an, gegen die unter dem Decknamen 007 im Jahr 19-56 (zwischen dem 01 .OI .1956 und 31.12.19.56 etnschließljch) ermittelt wurde. Hinweis: Datunxswertc können mit Hilfe der Operatoren < , f, >, und verglichen werden.
